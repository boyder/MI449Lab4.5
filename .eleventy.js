// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode("card", function(name, info) {
  return `<span class = "${name}"></span>
  <h2>${name}</h2>
  <h3>${info}</h3>`;
  })
};


