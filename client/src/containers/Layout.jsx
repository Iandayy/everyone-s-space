import { useLocation } from "react-router-dom";

const Layout = (props) => {
  // min-h full - 맨위에 부분 빼기 - 네비게이션 - Alien Post - footer의 높아

  // 1. 로고 헤더 높이: 56 + 20 + 40 = 116
  // 2. 탭: 66 + 20 + 20 = 106
  // 3. 마진: 20 + 20 = 40
  // 4. 푸터: 40

  // margin: 그 요소의 높이에 포함이 되지 않는다.
  // padding: 그 요소의 높이에 포함이 된다.

  // main: 60px + (20px + 20px) -> 높이 계산이 힘들어짐.
  // margin의 경우: 물리적으로 떨어져 있을 때 써야함.

  // padding:

  const path = useLocation().pathname;

  const homePath = path === "/";
  const authPath = path === "/login" || path === "/join";
  return (
    <main
      className={`flex flex-col p-5 min-h-[calc(100vh-235px)] ${
        (authPath || homePath) && "h-[calc(100vh-152px)]"
      }`}
    >
      {props.children}
    </main>
  );
};

export default Layout;
