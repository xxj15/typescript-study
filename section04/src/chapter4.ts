// 사용자 정의 타입가드
// 참 또는 거짓을 반환하는 함수를 이용해 타입 가드를 마음대로 만들 수 있도록 도와주는 TS 문법

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
} // animal을 DOG 타입으로 단언
// 함수가 참이면 animal이 DOG 타입이라고 단언 -> DOG 타입으로 타입 좁혀줌

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}

/*
가능하지만 in 연산자를 통해 타입을 좁히는 방식은 좋지 않다. 
Dog 타입의 프로퍼티가 다음과 같이 중간에 이름이 수정되거나 추가 또는 삭제될 경우에는 타입 가드가 제대로 동작하지 않을 수도 있음
function warning(animal: Animal) {
  if ("isBark" in animal) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else if ("isScratch" in animal) {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
  */
