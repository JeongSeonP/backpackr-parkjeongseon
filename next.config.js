/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
    @import "styles/_variables.sass"
    @import "styles/_mixins.sass"
    `,
  },
};
