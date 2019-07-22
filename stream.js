const fs = require("fs");
const path = require("path");

/*创建一个可读流，并读取某个文件*/
const rs = fs.createReadStream(path.resolve("D:\\190425\\day09\\10.对象的简写.avi"));
/*创建一个可写流*/
const ws = fs.createWriteStream(path.resolve(__dirname,"d.avi"));

/*
rs.once("open",()=>{
  console.log("可读文件打开了");
});
ws.once("open",()=>{
  console.log("可写文件打开了");
});

rs.once("close",()=>{
  console.log("可读文件关闭了");
  ws.end();
});
ws.once("close",()=>{
  console.log("可写文件关闭了");
});



rs.on("data",(chuank)=>{
  ws.write(chuank);
});
*/


/*pipe管道*/
rs.pipe(ws);

