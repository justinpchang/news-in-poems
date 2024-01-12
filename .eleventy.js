module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts/EBGaramond-VariableFont_wght.ttf");
  eleventyConfig.addFilter("random", (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  });
};
