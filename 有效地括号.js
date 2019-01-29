var isValid = function(s) {
    if(s.length==0){
        return true
    }
    if(s.charAt(0)==']'||s.charAt(0)==')'||s.charAt(0)=='}'){
        return false
    }
    let stack=[];
    stack.push(s.charAt(0));
  
    for(let i=1;i<s.length;i++){
        console.log(7,s.charAt(i))
        if(s.charAt(i)==']'||s.charAt(i)==')'||s.charAt(i)=='}'){
            let cur_index=searchLeft(s.charAt(i));
            console.log(13,i)
            console.log(14,cur_index)
            if(cur_index==-1){
                return false;
            }else if(cur_index+1!=stack.length){
                return false
            }else{
                stack.splice(cur_index,1);
            }
        }else{
            stack.push(s.charAt(i));
        }
        console.log(25,stack)
    }
    if(stack.length>0){
        return false
    }
    return true;


    function searchLeft(right_sign){
        let obj={
            "}":"{",
            ")":"(",
            "]":"["
        }
        console.log(39,stack)
        console.log(39,obj[right_sign]);
        console.log(39,stack.indexOf(obj[right_sign]))
        return stack.lastIndexOf(obj[right_sign]);
    }
};


console.log(isValid(""));