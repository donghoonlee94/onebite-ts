/**
 * 함수 타입 정의
 */
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 정의
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = "홍길동", age, tall) {
    console.log(`name: ${name}`);
    // typeof가 없을 경우 undefined 일 수 있기 때문에 에러 발생.
    if (typeof tall === "number") {
        console.log(`tall: ${tall + 10}`);
    }
}
introduce("홍", 23, 180);
introduce("홍"., 23);
function getSum(...rest) {
    let sum = 0;
    rest.forEach(it => sum += it);
    return sum;
}
getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
export {};
