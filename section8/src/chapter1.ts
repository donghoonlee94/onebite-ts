/**
 * Indexed access type
 */

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const key = "author";

// "author" -> index
// 주의할 점은 "author"가 string이 아닌 속성 타입을 나타내는 것.
// typeof key로 변수의 타입을 가져오거나, ["author"]로 속성 타입을 사용해야 한다.
function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[number] = {
  title: "게시글1",
  content: "게시글1 내용",
  author: {
    id: 1,
    name: "홍길동",
    age: 25,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];
