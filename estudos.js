/*var arrTest = ["Henrique", "Guste", "Pedro"];
console.log(arrTest[0]);
arrTest.unshift("Alysson");
console.log(arrTest[0]);
arrTest.push("Mathias");
console.log(arrTest[4]);
arrTest.shift();
console.log(arrTest);
*/
//
let arr = [1, 3, 4, 6, 7, 9, 10];

for(let i = 0; i < 7; i++){
    if(arr[i] % 2 == 0){
        arr[i] = arr[i] + 1;
    }else if (arr[i] %2 != 0){
        console.log("impar");
    }
}
console.log(arr);

