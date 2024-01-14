require("dotenv").config();

import axios from "axios";
import {
  MOCK_AI_MESSAGE,
  MOCK_NEWS_API_TOP_HEADLINES_RESPONSE,
  MOCK_NEWS_RESPONSE,
} from "./constants/mock";
import { Article } from "./types";
import { POEM_TYPES } from "./constants/poemTypes";
import fs from "node:fs";

import OpenAI from "openai";
const openai = new OpenAI();

// Get startDate and endDate from first two arguments
const [startDate, endDate] = process.argv.slice(2);

const main = async (startDate: string, endDate: string): Promise<void> => {
  console.log(`Generating poem for ${startDate} to ${endDate}...`);

  // Get news articles from World News API
  const response = await axios.get("https://api.worldnewsapi.com/search-news", {
    headers: {
      "x-api-key": process.env.WORLD_NEWS_API_KEY,
    },
    params: {
      "earliest-publish-date": startDate,
      "latest-publish-date": endDate,
      "news-sources":
        "https://www.nytimes.com,https://www.bbc.com,https://www.npr.org",
    },
  });
  const blacklistedWords = ["podcast", "trump", "briefing"];
  const data = response.data.news.filter(({ url }) =>
    blacklistedWords.every((word) => !url.toLowerCase().includes(word))
  );

  if (data.length === 0) {
    return null;
  }
  const raw = data[0];
  const article = {
    title: raw.title,
    text: raw.summary ?? raw.text,
    url: raw.url,
    image: raw.image,
    publish_date: raw.publish_date.split(" ")[0],
  };

  // Select a poem type
  const poemType = POEM_TYPES[Math.floor(Math.random() * POEM_TYPES.length)];

  // Generate a poem
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
  			You are a poet trained to write poems about current events in ${poemType} form.
  			I will provide you with the title and summary of a news article.
        Write an entertaining poem inspired by the news article. Do not summarize it.
        Ensure stanzas are not longer than 4 verses. Ensure that verses are not too long.
        Separate stanzas with a blank line only.
  			`,
      },
      {
        role: "user",
        content: `
  			Title: ${article.title}
  			Summary: ${article.text}
  			`,
      },
    ],
  });
  const message = completion.choices[0].message.content;
  const markdown = message.replaceAll("\n", "<br>");

  const header = `---
date: ${article.publish_date}
tags: days
image: ${article.image}
url: ${article.url}
prettyDate: ${new Date(article.publish_date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })}
---
`;

  // Write to file
  fs.writeFileSync(`./days/${article.publish_date}.md`, header + markdown, {
    flag: "w+",
  });
};

const backfill = async (): Promise<void> => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const lastYear = currentYear - 1;

  for (let year = lastYear; year <= currentYear; year++) {
    for (let week = 8; week <= 52; week++) {
      const startOfWeek = new Date(year, 0, (week - 1) * 7 + 1)
        .toISOString()
        .split("T")[0];
      const endOfWeek = new Date(year, 0, week * 7).toISOString().split("T")[0];
      await main(startOfWeek, endOfWeek);
    }
  }
};

// backfill();

main(startDate, endDate);
