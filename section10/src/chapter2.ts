/**
 * Pick<T, K>
 * 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// K가 never, function, 무엇이든 다 들어올 수 있는 점을 extends keyof T로 T 객체의 키값만 받을 수 있도록 한다.
// K가 서브타입이여야 참이 된다.
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "예전 글",
  content: "예전 컨텐츠",
};

/**
 * Omit<T, K>
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Exclude로 keyof T에서 K인 'title'을 제거 > Pick<Post, 'content' | 'tags' | 'thumbnailUrl'>
// > title을 제외한 값이 타입으로 지정됨.

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailUrl: "",
};

/**
 * Record<K, V>
 * 객체를 쉽게 정의하는 타입
 */

// keyof any, 객체에서 사용될 수 있는 모든 키를 의미함. string, number, symbol
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "memium" | "small",
  { url: string; size: number }
>;
