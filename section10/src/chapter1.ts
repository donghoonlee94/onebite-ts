/**
 * Partial<T>
 * -> 특정 객체 타입에 모든 프로퍼티를 선택적 프로퍼티로 변경.
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

// Mapped type: Indexed access type
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "임시",
  content: "뭘 쓸까...",
};

/**
 * Required<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 변경.
 */

// -? : Optional property removal
type Required<T> = {
  [k in keyof T]-?: T[k];
};

const withThumbnailPost: Required<Post> = {
  title: "TS",
  tags: ["ts"],
  content: "",
  thumbnailUrl: "https://......",
};

/**
 * Readonly<T>
 * 읽기 전용
 */

type Readonly<T> = {
  readonly [k in keyof T]: T[k];
};

const readonlyPost: Readonly<Post> = {
  title: "수정 불가",
  tags: [],
  content: "",
};

readonlyPost.content = "readonly";
