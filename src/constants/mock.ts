export const MOCK_NEWS_RESPONSE = {
  offset: 0,
  number: 10,
  available: 2,
  news: [
    {
      id: 175552875,
      title:
        "Can New Haven’s Legendary Pizza Joints Play on the National Stage?",
      text: "For generations, New Haven has been a pizza town. The pies are distinct: more of a meal than the greasy, fold-up-and-go New York slices, more blue-collar than baroque California concoctions. They are a sort of American Neapolitan — chewy, charred and fresh, but with quirkier toppings than one might find on a traditional pie in Naples. The culture is unique, too. Connecticut natives and Yale University graduates alike hold pointed opinions about which pizzeria is best. Each weekend, lines stretch down Wooster Street and through Wooster Square, as local families and tourists line up for lunch. But in the past few years, things have begun to change. Suddenly, it seems like everyone wants to cash in on the popularity of the city’s signature dish. “I’ve been promoting New Haven pizza for years and pushing it into people’s mouths — literally,” said Colin M. Caplan, New Haven’s unofficial pizza historian who wrote a book on the city’s pizza.",
      url: "https://www.nytimes.com/2024/01/01/nyregion/new-haven-pizza.html",
      image:
        "https://static01.nyt.com/images/2023/12/22/multimedia/00newhaven-pizza--01-hbmg/00newhaven-pizza--01-hbmg-facebookJumbo.jpg",
      publish_date: "2024-01-01 12:07:50",
      author: "Amelia Nierenberg",
      authors: [Array],
      language: "en",
      source_country: "us",
      sentiment: 0.552,
    },
    {
      id: 175647261,
      title: "New Year’s Cooking Resolutions",
      text: "If abiding by resolutions were as easy as setting them, perfection would be attainable and the self-improvement section of the bookstore would be cobweb city. Still, self-reflection can be a rewarding exercise at the beginning of a new year. What better place to start than in the kitchen, where you have to spend at least a little bit of time each day? Consider a gentler approach to resolution-making: Try to become just a little bit better at something, rather than change your habits wholesale. Perhaps you’d like to incorporate Meatless Mondays into your weekly routine, or maybe you’re resolving to bake the birthday cakes for your loved ones this year. Maybe, just maybe, this is the year you finally learn how to cook. No matter what your goals, we have recipes to bring you closer to them. Give these a try in 2024, and, by this time next year, we’re certain you’ll be impressed by how far your cooking has come.",
      url: "https://www.nytimes.com/2024/01/01/dining/new-years-resolution-recipes.html",
      image:
        "https://static01.nyt.com/images/2024/01/03/multimedia/01RESOLUTION-recipes2-flqw/01RESOLUTION-recipes2-flqw-facebookJumbo.jpg",
      publish_date: "2024-01-01 18:57:50",
      author: "Tanya Sichynsky",
      authors: [Array],
      language: "en",
      source_country: "us",
      sentiment: 0.537,
    },
  ],
};

export const MOCK_NEWS_API_TOP_HEADLINES_RESPONSE = {
  status: "ok",
  totalResults: 38,
  articles: [
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Associated Press",
      title:
        "Cluster of lost cities in Ecuadorian Amazon that lasted 1,000 years uncovered - New York Post ",
      description:
        "Archeologists have uncovered a cluster of lost cities in the Amazon rainforest that was home to at least 10,000 farmers around 2,000 years ago.",
      url: "https://nypost.com/2024/01/12/news/ecuadorian-amazon-lost-cities-that-lasted-1000-years-uncovered/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/01/Lost-city.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2024-01-12T08:43:00Z",
      content:
        "Archeologists have uncovered a cluster of lost cities in the Amazon rainforest that was home to at least 10,000 farmers around 2,000 years ago.\r\nA series of earthen mounds and buried roads in Ecuador… [+3026 chars]",
    },
  ],
};

export const MOCK_AI_MESSAGE = {
  role: "assistant",
  content:
    "In New Haven town where legends thrive,\n" +
    "Where pizza joints take center stage,\n" +
    "With pies distinct, they come alive,\n" +
    "On the national scene, can they engage?\n" +
    "\n" +
    "These pizzas, more than just a snack,\n" +
    "A meal that fills with every bite,\n" +
    "Not like the New York slices we lack,\n" +
    "Nor California's fanciful delight.\n" +
    "\n" +
    "American Neapolitan, they call it so,\n" +
    "Chewy, charred, fresh from the flame,\n" +
    "With quirky toppings that make them glow,\n" +
    "A twist on Naples' traditional fame.\n" +
    "\n" +
    "The culture unique, opinions held high,\n" +
    "Connecticut natives, Yale graduates,\n" +
    "Debating which pizzeria they'll try,\n" +
    "A passionate topic, none can negate.\n" +
    "\n" +
    "Down Wooster Street, the lines unfold,\n" +
    "Through Wooster Square, they stretch so long,\n" +
    "Locals and tourists, eager and bold,\n" +
    "Awaiting their turn, a pizza so strong.\n" +
    "\n" +
    "But change has come, as of late,\n" +
    "The city's dish in high demand,\n" +
    "Everyone wanting to replicate,\n" +
    "The popularity they now understand.\n" +
    "\n" +
    `"I've been promoting New Haven pizza for years,"\n` +
    "Said Colin Caplan, unofficial historian,\n" +
    "Pushing it into mouths, relieving their fears,\n" +
    "Sharing the story, not just a euphorian.\n" +
    "\n" +
    "Can these legendary joints prevail,\n" +
    "In a world now filled with the so-called best?\n" +
    "Will they keep their authenticity, never frail,\n" +
    "And rise above the competition's crest?\n" +
    "\n" +
    "New Haven's pizza, forever renowned,\n" +
    "A cultural icon of flavor and pride,\n" +
    "May it continue to astound,\n" +
    "With its chewy crust and toppings wide.\n" +
    "\n" +
    "So let the lines grow longer still,\n" +
    "The pizza applause never cease,\n" +
    "For in New Haven, they possess the skill,\n" +
    "To create a pizza masterpiece.",
};
