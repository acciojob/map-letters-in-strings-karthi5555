//your JS code here. If required.
function mapLetters(str){
    let arr = {};
    for(let i=0; i<str.length; i++){
        if(arr[str[i]]){
            arr[str[i]].push(i);
        }
        else{
            arr[str[i]] = [ i ];
        }
    }
    return arr;
}
let str = prompt("enter a string");
mapLetters(str);