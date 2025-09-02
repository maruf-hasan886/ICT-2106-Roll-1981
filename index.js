
var arr=["a","b","c","d","A","!","V","6","2","#"];
var count =0;
var f=0;
for(var i=0;i<arr.length;i++){
if (arr[i]=='i'||arr[i]=='@' ||arr[i]=='#'||arr[i]=='$'|| arr[i]=='%'){
f=1;

}
    if(arr.length>=8 && f==1){

        c=1;
    }
}
if(c==1){
    console.log("valid password");
}
else{
    console.log("invalid password");
}