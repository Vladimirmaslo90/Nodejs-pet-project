//File System
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('Directory was created');
// })

const filePath = path.join(__dirname, 'test', 'test.txt');
// fs.writeFile(filePath, 'Hello dudes', (err) => {
//   if (err) {
//     throw err
//   }
//   console.log('File was created');
//   fs.appendFile(filePath, '\nAdditional text', err => {
//     if (err) {
//       throw err
//     }
//     console.log('Text was appended')
//   })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString())
  console.log(content)
})