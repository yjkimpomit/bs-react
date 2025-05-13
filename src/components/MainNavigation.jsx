import { Link } from "react-router-dom";
function MainNavigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
