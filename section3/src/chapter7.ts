/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }

  //   if (user.tag === "ADMIN") {
  //     // Admin
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if (user.tag === "MEMBER") {
  //     // Member
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  //   } else {
  //     // Guest
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  //   }
}

/**
 * 복습
 */

// 비동기 작업의 결과를 처리하는 객체

// 로딩 중 -> 콘솔에 로딩 출력
// 실패 -> 에러 출력
// 성공 -> 데이터 출력
function processResult(task: AsyncTast) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 ${task.response.data}`);
      break;
    }
  }
}

type LoadingTast = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTast = LoadingTast | FailedTask | SuccessTask;

// error나 response는 없을 수 있기 때문에 옵셔널 체이닝 등을 쓰지 않을 경우 에러가 생긴다.
// task.error?.message
// 서로소 유니온 타입으로 설정하여 해결할 수 있다.
// type AsyncTast = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

const loading: AsyncTast = {
  state: "LOADING",
};

const failed: AsyncTast = {
  state: "FAILED",
  error: {
    message: "원인",
  },
};

const success: AsyncTast = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  },
};
