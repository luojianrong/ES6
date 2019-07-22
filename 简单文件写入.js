const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname,"c.txt");
const fd = fs.writeFile(filePath,"这是简单流写入的文件",(err)=>{
  if (err){
    console.log(err)
  } else{
    console.log("文件写入成功");
  }
});
