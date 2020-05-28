const path = require('path')
const fs = require('fs')
const CleanCSS = require('clean-css')

const config = {
    input: '../source/css/style.css',
    output: '../source/css/style.min.css'
}

const outputDir = path.resolve(__dirname, config.output)
const inputDir = path.resolve(__dirname, config.input)
const style = fs.readFileSync(inputDir, 'utf-8')

const options = {
  /* options */
}
const output = new CleanCSS(options).minify(style)
if (output.styles) {
  fs.writeFileSync(outputDir, output.styles)
}
