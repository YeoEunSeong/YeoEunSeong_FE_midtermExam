/*(1) 배열을 만든다
(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
(3) 배열의 원소의 평균을 구하고,그 평균을 소수점 아래 한 자리까지 출력하시오.*/

let a = []; 
let sum=0;
let average;

for (let i = 0; i < 100 ; i++) {
    a[i] = Math.floor(Math.random() * (100) + 1);
    sum+=a[i];
}

average=sum/100;
average=average.toFixed(1);
console.log(average);


