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

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        arr[i] = arr[i] + 1;
    }else if (arr[i] %2 != 0){
        console.log("impar");
        var ind = i;
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

var teste1 = {
    nome : "Henrique",
    email : "henrique@gmail.com",
    idade : "16"
}
console.log(teste1);