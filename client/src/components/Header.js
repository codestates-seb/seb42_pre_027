import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../svg/stackoverflow.svg';

const FirstDiv = styled.header`
  background-color: rgba(247, 247, 248);
  width: 100%;
  height: 50px;
  border-top: 3px solid rgba(243, 121, 42);
  position: sticky;
  top: 0;
  box-shadow: 0px 2px 3px rgba(217, 218, 219);
  z-index: 999;

  div {
    display: flex;
    justify-content: center;
    margin: 3px 0;
  }

  div .firstUl {
    display: flex;
    align-items: center;
    list-style: none;
    color: rgba(72, 79, 85);
    font-size: small;
  }

  div .firstUl li {
    padding: 10px;
  }

  div .secondUl {
    display: flex;
    align-items: center;
    list-style: none;
  }

  div .secondUl li {
    margin: 0 2px 0;
  }

  div .secondUl li input {
    width: 500px;
  }

  div ul .userId{
    margin: 10px;
    color: rgba(100,80,60,0.6);
  }

  div ul .userId:hover{
    text-decoration: underline;
  }
  
`;

const FirstButton = styled.button`
  background-color: rgba(211, 233, 242);
  color: rgba(65, 113, 151);
  border: 1px solid rgba(65, 113, 151);
  border-radius: 3px;
  padding: 10px;
`;

const SecondButton = styled.button`
  background-color: rgba(18, 133, 251);
  color: white;
  border: 1px solid rgba(65, 113, 151);
  border-radius: 3px;
  padding: 10px;
`;

const Header = () => {
  let isLogin = localStorage.getItem('isLogin');
  let username = localStorage.getItem('username');

  const handleLogOut = () => {
    localStorage.clear();
    document.location.href = '/';
  };
  return (
    <FirstDiv>
      <div>
        <span>
          {isLogin ? <Link to="/main">
            <Logo fill="current" />
          </Link> : <Link to="/">
            <Logo fill="current" />
          </Link>}
        </span>

        <ul className="firstUl">
          <li>About</li>
          <li>Product</li>
          <li>For Teams</li>
        </ul>

        <ul className="secondUl">
          <li>
            <input type="text" />
          </li>
          {isLogin ? (
            <>
              <li className='userId'>{username}</li>
              <SecondButton onClick={() => handleLogOut()}>로그아웃</SecondButton>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FirstButton>Log in</FirstButton>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <SecondButton>Sign up</SecondButton>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </FirstDiv>
  );
};

export default Header;
