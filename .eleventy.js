module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/EBGaramond-VariableFont_wght.ttf");
  eleventyConfig.addFilter("random", (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  });
  eleventyConfig.addFilter("excerpt", (day) => {
    const excerpt =
      day.content
        .split("<br>")[0]
        .replace("<p>", "")
        .replace(/[^A-Za-z0-9 ]/g, "")
        .toLowerCase() + "...";
    console.log(excerpt);
    return excerpt;
  });
};
