const {readFileSync, writeFileSync, fstat}=require('fs')
// const fs=require('fs')  it is same as above
// fs.readFileSync() reads file
console.log('start')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')//sync doesnot require callback
console.log(first, second)
writeFileSync('./content/result-sync.txt',`hello this is result : ${first}, ${second}`,
{flag :'a'})
//if file is not there node will create new file and if there it will override it flag a will apend file