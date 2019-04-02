var evalRPN = function(tokens) {
    let nums=[];
    for(let i=0;i<tokens.length;i++){
        let opera=['+','-','*','/']
        if(opera.indexOf(tokens[i])!=-1){
            let b=Number(nums.pop());
            let a=Number(nums.pop());
            console.log(a,b)
            if(tokens[i]=='+'){
                nums.push(a+b);
            }else if(tokens[i]=='-'){
                nums.push(a-b)
            }else if(tokens[i]=='*'){
                nums.push(a*b)
            }else{
                nums.push(parseInt(a/b));
            }
        }else{
            nums.push(tokens[i])
        }
        console.log(nums)
    }
    return nums.pop()
};


console.log(evalRPN(["4","13","5","/","+"]))

