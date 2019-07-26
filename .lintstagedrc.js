const fs = require('fs')

module.exports = {
    '*.js':(files) => {
        return files.map(item => `eslint --fix ${item}`) 
    },
    '*.sh':(files) => {
        console.log(fs.stat(files),'======')
        return files.map(item => `eslint --fix ${item}`)
    }
}