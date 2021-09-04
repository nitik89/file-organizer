let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"png"],
    app: ['exe', 'dmg', 'pkg', "deb"]
}


function getType(p){
    if (p == undefined) {

        p = process.cwd();
    }
    if(fs.existsSync(path.join(p,"organized_files"))==false){
        fs.mkdirSync(path.join(p,"organized_files"))
    }
    let content=fs.readdirSync(p);
    console.log(content.length);
    for(let i=0;i<content.length;i++){
        let statsOfAPath=fs.lstatSync(path.join(p,content[i]));
       if(statsOfAPath.isFile()){
        let ext=path.extname(content[i]).split(".")[1];
        let ans=-1;
       for(let j in types){
           let arr=types[j];
          
          for(let data of arr){
             if(data==ext){
               ans=j;
                
             }
          }
         
       }
       if(ans==-1){
        copyFile("others",path.join(p,content[i]),p);
      }
      else{
        copyFile(ans,path.join(p,content[i]),p);
      }
       }
    }


}
function copyFile(folderName,pathofFile,srcPath){
    if(fs.existsSync(path.join(srcPath,"organized_files",folderName))==false){
        fs.mkdirSync(path.join(srcPath,"organized_files",folderName));
    }
    let pathOFFolder=path.join(srcPath,"organized_files",folderName);//current path of folder
       console.log(pathOFFolder);
    let toBeCopiedFileName=path.basename(pathofFile); //file name which is to be copied
    let newPath=path.join(pathOFFolder,toBeCopiedFileName);
    fs.copyFileSync(pathofFile,newPath);
    console.log("loading......")
    console.log(toBeCopiedFileName);
   
}
module.exports={
    getTypeOFIt:getType
}