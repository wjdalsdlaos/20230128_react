import { Link } from "react-router-dom";
// react-router-dom을 통해 새로고침 없이 라우팅을 하려면 link 컴포넌트를 사용해야 한다.

function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="post">Post</Link>
        </li>
      </nav>
    </header>
  );
}

export default Header;
