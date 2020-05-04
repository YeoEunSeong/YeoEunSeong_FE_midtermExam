/*(1) 배열을 만든다.
(2) Math.random() 메소드를 사용하여,
    1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열에서 짝수의 합을 구하하여 출력하라.
(반복문 없이, 배열의 메소드만 사용하여 구현하라) */


let a = []; 

for (let i = 0; i < 100 ; i++) {
        a[i] = Math.floor(Math.random() * (100) + 1);
    }
let even_filter = a.filter((e) => e % 2 === 0);
let result = even_filter.reduce((a, b) => a + b);

console.log(result);

