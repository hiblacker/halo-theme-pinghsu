const path = require("path");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const precss = require("precss");
const fs = require("fs");
const cssnano = require("cssnano");

const config = {
    input: "../source/css/style.css",
    output: "../source/css/style.min.css",
};

const outputDir = path.resolve(__dirname, config.output);
const inputDir = path.resolve(__dirname, config.input);

fs.readFile(inputDir, (err, css) => {
    postcss([precss, autoprefixer])
        .process(css, { from: inputDir, to: outputDir })
        .then((result) => {
            cssnano.process(result.css).then((res) => {
                fs.writeFileSync(outputDir, res.css);
            });
        });
});
