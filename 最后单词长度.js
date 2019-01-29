var lengthOfLastWord = function(s) {
    if(s==''){
        return 0;
    }
    let index=s.lastIndexOf(' ');
    if(index==-1){
        return s.length;
    }else if(s.substr(index+1).length>0){
        return s.substr(index+1).length;
    }else{
        let newStr=
        console.log(s.replace(/\s+/g,''))
        return s.replace(/\s+/g,'').length;
    }
};

var lengthOfLastWord2 = function(s) {
    if(s==''){
        return 0;
    }
    let arr=s.split(' ');
    arr=arr.filter(item=>{
        return item!=''
    })
    if(arr.length>0){
        return arr[arr.length-1].length;
    }else{
        return 0;
    }
   
    
    
}


console.log(lengthOfLastWord2(' '))