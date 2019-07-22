const fs = require("fs");

fs.open("b.txt","w",(err,fd)=>{
  console.log("文件打开成功");
  if (err){
    console.log(err);
  } else{
    fs.write(fd,"这是异步写入的文件",(err)=>{
      if (err){
        console.log(err);
      } else{
        console.log("文件写入成功")
      }
    });
  };
  fs.close(fd,()=>{
    console.log("文件关闭成功");
  })
})
