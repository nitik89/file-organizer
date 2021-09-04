function getCommands(){
    let parent="node main.js";
    let list=[parent+' tree "path" ',parent+' organize "path" ',parent+' help ']
    for(let i=1;i<=list.length;i++){
        console.log(i+". "+list[i-1]); 
    }
}
module.exports={
    get:getCommands
}