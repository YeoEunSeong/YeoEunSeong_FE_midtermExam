/*(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열을 내림차순으로 정렬하여 출력하시오.*/

let a = []; 


for (let i = 0; i < 100 ; i++) {
    a[i] = Math.floor(Math.random() * (100) + 1);
    
    
}
function compareNumber(i,j){
    return j-i;
}
console.log(a);

a.sort(compareNumber);
console.log("from here");

console.log(a);

