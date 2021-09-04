#!/usr/bin/env node

let fs = require("fs");
let path = require("path");
let commands=require('./commands');
let tree=require('./tree');
let organize=require('./organize')
let arr=process.argv.slice(2);

if(arr[0]=="tree"){
tree.treeFunc(arr[1]);
}
else if(arr[0]=="organize"){
organize.getTypeOFIt(arr[1]);
}

else if(arr[0]=="help"){
commands.get();
}
else{
    console.log("please enter correct commands")
}


// function treeFn(srcPath,sp) {
    
    
    
//     let toBeCopiedFileName=path.basename(srcPath);
//     console.log(sp+first+toBeCopiedFileName);
// //     let currentPath=process.cwd();
// // let filePath=path.join(currentPath,"dir1",cmd);

// let content=fs.readdirSync(srcPath)
// for(i of content){
   
//     let statsOfAPath=fs.lstatSync(path.join(srcPath,i));
//     if(statsOfAPath.isDirectory()){
      
//     treeFn(path.join(srcPath,i),sp+"\t");
//     }
//     else{
//         console.log(sp+"\t"+second+i);
//     }
// }
// } 9289282588
// function treeFn(Path,sp){
//     let isFile=fs.lstatSync(Path).isFile();
//     if(isFile){
//         let basename=path.basename(Path);
//         console.log(sp+second+basename);
//     }
//     else{
//         let base=path.basename(Path);
//         console.log(sp+first+base);
//         let children=fs.readdirSync(Path);
//         for(let i=0;i<children.length;i++){
//             let child=children[i];
//             let url=path.join(Path,child);
//             treeFn(url,sp+"\t");
//         }
//     }
// }

