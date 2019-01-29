var longestCommonPrefix = function(strs) {
    let commonStr=strs[0].charAt(0);
    for(let i=0;i<strs[0].length;i++){
        let bHas=true;
        for(let j=1;j<strs.length;j++){
            console.log(strs[j])
            if(strs[j].charAt(commonStr.length-1)!=commonStr.charAt(commonStr.length-1)){
                bHas=false;
                break;
            }
        }
        console.log(12,bHas)
        if(!bHas){
            return commonStr.substr(0,commonStr.length-1);     
        }else{
            commonStr+=strs[0].charAt(i+1);
        }
    }

    return commonStr
};


function test(){

    for(let i=0;i<6;i++){
        console.log(i);
        if(i==3){
            return;
        }
    }
}



//test()


let res=longestCommonPrefix(["flower","flow","flight"]);
console.log(res);