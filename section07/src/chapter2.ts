// map 메서드

// 자바스크립트 배열 메서드 - map
// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2); // [2, 4, 6] & newArr: number[]로 타입 정의함

// map 메서드를 직접 함수로 만든 후 타입 정의하기

const arr = [1, 2, 3];

function map<T>(arr: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);
// map(arr, (it) => it.toString());
// 오류 발생 이유 : 첫 번째 인수로 arr을 전달했을 때 타입 변수 T에는 number 타입이 할당되었기 때문에 콜백 함수의 반환값 타입도 number 타입이 되어야 하기 때문
// 하지만 map 메서드는 이렇게 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 함

// 해결방법 - 제네릭 타입 변수를 두 개 사용
const arr2 = [1, 2, 3];

function map2<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map2(arr, (it) => it.toString()); // string[] 타입의 배열을 반환
// 결과 : ["1", "2", "3"]

// forEach  : 배열의 모든 요소에 콜백함수를 한 번씩 수행해주는 메서드
const arr3 = [1, 2, 3];

arr3.forEach((it) => console.log(it)); // 출력 : 1, 2, 3

// ForEach 메서드 만들고 타입 정의하기
function forEach<T>(arr: T[], callback: (item: T) => void) {
  // void로 해도 되는 이유 : forEach함수는 반환값이 없는 메서드이므로
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
