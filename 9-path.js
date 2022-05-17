const path=require('path')
console.log(path.sep)
const filepath=path.join('/content', 'subfolder','text.txt')
console.log(filepath)
const absolute=path.resolve(__dirname,'content','subfolder','text.txt')//return absolute path means location in which folder is presnt in drive
console.log(absolute)