let num = 266219;

let str = num.toString();
let arr = str.split('');
let multi = 1;
for (let i = 0; i < arr.length; i++) {
  multi *= (+arr[i]);
  }
console.log(multi);

let multi3= multi * multi * multi;

str = multi3.toString();
arr = str.split('');
for(let i = 0; i < 2; i++){
    alert(arr[i]);
}