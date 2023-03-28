const fs = require('fs')
const path = require('path')
const minify = require('html-minifier').minify
// get all the files in the /src directory
const files = fs.readdirSync('./src/', null, (err, files) => {
  if (err) {
    throw err
  }
  console.log('no error')
  return files
})
// loop through the files and find only the html files
const htmlFiles = []
files.forEach((file, i) => {
  if (path.extname(file) === '.html') {
    htmlFiles.push(file)
  }
})

// process the html files for production
htmlFiles.forEach((file) => {
  fs.readFile(`./src/${file}`, 'utf-8', (err, data) => {
    if (err) throw err
    const result = data
      .replace(/(sm:)/g, 'sm-')
      .replace(/(md:)/g, 'md-')
      .replace(/(lg:)/g, 'lg-')
      .replace(/(xl:)/g, 'xl-')
      .replace(/(hover:)/g, 'hover-')
    const minresult = minify(result, { collapseWhitespace: true })
    fs.writeFile(`./dist/${file}`, minresult, 'utf-8', (err) => {
      if (err) throw err
    })
  })

  fs.readFile('./src/global.css', 'utf-8', (err, data) => {
    if (err) throw err
    const result = data
      .replace(/(sm\\:)/g, 'sm-')
      .replace(/(md\\:)/g, 'md-')
      .replace(/(lg\\:)/g, 'lg-')
      .replace(/(xl\\:)/g, 'xl-')
      .replace(/(hover\\:)/g, 'hover-')
    fs.writeFile('./dist/output.css', result, 'utf-8', (err) => {
      if (err) throw err
    })
  })
})
