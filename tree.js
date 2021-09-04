let fs = require("fs");
let path = require("path");
let first="└──"
let second="├──";
function treeMaker(srcpath){
    if (srcpath == undefined) {

        srcpath = process.cwd();
    }
    if(!fs.existsSync(srcpath)){
        console.log("Please enter a valid path");
        return;
    }
    treeFn(srcpath,"");
}
function treeFn(srcPath,sp) {
    
    
    
    let toBeCopiedFileName=path.basename(srcPath);
    console.log(sp+first+toBeCopiedFileName);
//     let currentPath=process.cwd();
// let filePath=path.join(currentPath,"dir1",cmd);

let content=fs.readdirSync(srcPath)
for(i of content){
   
    let statsOfAPath=fs.lstatSync(path.join(srcPath,i));
    if(statsOfAPath.isDirectory()){
      
    treeFn(path.join(srcPath,i),sp+"\t");
    }
    else{
        console.log(sp+"\t"+second+i);
    }
}
}
module.exports={
    treeFunc:treeMaker
}