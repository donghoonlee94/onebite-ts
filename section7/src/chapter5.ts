/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~실패");
  }, 3000);
});

promise
  .then((response) => {
    // response는 unknown. promise는 추론하지 못하며 unkwnon 타입으로 된다.
    console.log(response * 10);
  })
  .catch((err) => {
    if (typeof err === "string") {
      console.log(err);
    }
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수 선언부에 타입을 정의해두는 것을 협업측면에서 추천.
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then(({ id, title, content }) => {
  console.log(id, title, content);
});
