import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Side = styled.div`
  background-color: white;
  width: 164px;
  height: 100vh;
  z-index: 0;
  text-align: left;
  display: flex;
  /* border-right: 3px solid #f48023; */
  border-right: 1px solid rgb(181, 181, 181);
  position: sticky;
  padding-top: 24px;

  * {
    list-style: none;
  }
  .nav-menu {
    font-size: 11px;
    margin: 10px 10px 15px 5px;
    color: #9a9fa5;
  }

  .nav-links {
    li:not(:first-child) {
      margin-bottom: 15px;
    }
  }
  span {
    /* 글씨색 추가 */
    padding-left: 30px;
    font-size: 0.85em;
    margin-top: 7.5px;
    margin-bottom: 7.5px;
  }
  #home {
    font-size: 0.85em;
  }
  .content {
    display: flex;
    width: 164px;
    height: 35px;
    > a {
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      /* 글씨색 수정 */
      color: black;
      width: 100%;
      height: 100%;
      &:focus {
        background-color: #f1f2f3;
        border-right: 3px solid #f48023;
        font-weight: 700;
      }
    }
  }
`;

const SideBar = () => {
  return (
    <div>
      <Header />
      <Side>
        <ol className="nav-links">
          <li id="home" className="content">
            <Link to="/main">Home</Link>
          </li>
          <ol className="nav-links">
            <li className="nav-menu">PUBLIC</li>
            <li className="content">
              <Link to="/main">
                <span>Question</span>
              </Link>
            </li>
            <li>
              <span>Tags</span>
            </li>
            <li>
              <span>User</span>
            </li>
            <li>
              <span>Companies</span>
            </li>
            <li className="nav-menu">COLLECTIVES</li>
            <li>
              <span>Explore Collectives</span>
            </li>
          </ol>
          <ol>
            <li className="nav-menu">TEAMS</li>
            <li>
              <span>Create free Team</span>
            </li>
          </ol>
        </ol>
      </Side>
      <Footer />
    </div>
  );
};

export default SideBar;

/* TODO:
1. 사이드바 스타일 컴포넌트 적용
1-1. 기본 구성 갖추기 *
1-2. focus 추가 *
1-3. 선택됐을 시 bold (font-weight: 700) *
1-4. 선택됐을 시 배경 회색 및 주황 띠 *
1-5. 아이콘 추가
1-6. span 및 Home 글씨색 변경 *
*/
