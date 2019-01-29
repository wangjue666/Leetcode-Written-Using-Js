var lengthOfLongestSubstring = function(s) {
    let arr=[];
    let len=0;
    let temLen=0;
    let cur=0;
    if(s==' '){
        return 1;
    }
    for(var i=0;i<s.length;i++){
        if(arr.length>0){
            if(arr.indexOf(s.charAt(i))==-1){
                arr.push(s.charAt(i));
                temLen++;     
            }else{
                len=len>temLen?len:temLen;
                temLen=0; 
                arr=[];
                i=cur;
            }
        }else{
            arr.push(s.charAt(i));
            temLen=1;
            cur=i;
        }
    
    }
    return len>temLen?len:temLen;
};

var lengthOfLongestSubstring3 = function(s) { 
    var len = s.length; 
    var arr=[],num=0,i=0; 
    for(let j=0;j<len;j++){ 
        let activeIndex=arr.indexOf(s[j]);
        if(activeIndex!==-1){ 
            arr.splice(0,activeIndex+1);
        } 
        arr.push(s[j]);
        num = Math.max(num, arr.length);
        console.log(arr);
     } 
     return num;
};





console.log(lengthOfLongestSubstring3('csadas'));