const fs = require('fs');
// console.log(fs);

/*打开文件*/
const fd = fs.openSync("a.txt","w");
console.log(fd);

/*写入文件*/
const res = fs.writeSync(fd,"这是同步写入的文件");
console.log(res);

/*关闭文件*/
const re = fs.closeSync(fd);
console.log(re);
