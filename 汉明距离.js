var sum=0;
var arrx=x.toString(2);
var arry=y.toString(2);
var xl=arrx.length;
var yl=arry.length;   
if(xl>yl){
    arry = Array(xl - yl + 1).join('0') + arry;
}else{
    arrx = Array(yl - xl + 1).join('0') + arrx;
}
for(var i in arry){
   if(arrx[i]!==arry[i]){
       sum++
   }
}    
return sum