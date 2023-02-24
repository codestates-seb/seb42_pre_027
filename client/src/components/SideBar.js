import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Side = styled.nav`
  background-color: white;
  width: 164px;
  /* height: 100%; */
  /* top: 30px; */
  text-align: left;
  /* display: flex; */
  /* border-right: 3px solid #f48023; */
  border-right: 1px solid rgb(181, 181, 181);
  position: sticky;
  padding-top: 24px;
  font-size: 0.85em;
  .fix {
    width: 164px;
  }
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
      padding-left: 5px;
      > li {
      }
    }
  }
  span {
    /* 글씨색 추가 */
    padding-left: 10px;
    font-size: 0.85em;
    margin-top: 7.5px;
    margin-bottom: 7.5px;
  }
  #home,
  #main {
    display: flex;
    align-items: center;
    padding-left: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .orange {
    display: flex;
    background-color: #f1f2f3;
    border-right: 3px solid #f48023;
    font-weight: bold;
    align-items: center;
    cursor: pointer;
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const SideBar = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;
  return (
    <Side>
      <div className="fix">
        <ol className="nav-links">
          <li
            id="home"
            className={currentPage === '/' ? 'orange' : null}
            onClick={() => navigate('/main')}
          >
            Home
          </li>
          <ol className="nav-links">
            <li className="nav-menu">PUBLIC</li>
            <li
              id="main"
              className={currentPage === '/main' ? 'orange' : null}
              onClick={() => navigate('/main')}
            >
              Question
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
            {/* <li>
              <ExploreLogo />
              <span>Explore Collectives</span>
            </li> */}
          </ol>
          <ol>
            <li className="nav-menu">TEAMS</li>
            <li>
              <span>Create free Team</span>
            </li>
          </ol>
        </ol>
      </div>
    </Side>
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
