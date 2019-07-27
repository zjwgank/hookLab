const fs = require("fs")
const parse = require('shell-parse')

module.exports = {
  "*.js": files => {
    return files.map(item => `prettier --write ${item}`)
  },
  "*.sh": files => {
      console.log(files,'====files')
    //   fs.readFile(files,(err,stat) => {
    //       if(stat){
    //           console.log(parse(stat.toString()))
    //       }
    //   })
    // return files.map(item => `eslint --fix ${item}`)
  }
}
