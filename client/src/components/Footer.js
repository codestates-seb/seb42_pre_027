import styled from 'styled-components';
import { ReactComponent as Logo } from '../svg/stackoverflow2.svg';

const FirstDiv = styled.div`
  background-color: rgba(32, 34, 37);
  display: flex;
  justify-content: center;
  z-index: 999;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  span {
    margin: 20px 0 0;
  }
  ul {
    margin: 20px 50px;
    list-style: none;
    text-align: start;
  }

  ul li:first-child {
    font-size: medium;
    color: rgba(177, 183, 188);
    margin-bottom: 15px;
  }
  ul li {
    font-size: small;
    margin: 5px 0 0;
    color: rgba(124, 132, 139);
  }
  p {
    margin: 60px 0 0;
    font-size: small;
    color: rgba(124, 132, 139);
  }
`;

const Footer = () => {
  return (
    // <footer>
    <FirstDiv className="footer">
      <span>
        <Logo fill="current" />
      </span>
      <ul>
        <li>SUPPORT</li>
        <li>codestates</li>
      </ul>
      <ul>
        <li>DEVELOPMENT</li>
        <li>조은선(FE)</li>
        <li>윤영원(FE)</li>
        <li>박철우(BE)</li>
        <li>박채은(BE)</li>
        <li>하태종(BE)</li>
      </ul>
      <ul>
        <li>TECHNOLOGY STACKS</li>
        <li>react</li>
        <li>springboot</li>
        <li>aws</li>
      </ul>

      <p>
        Site design / logo © 2023 Stack Exchange Inc; user contributions
        <br />
        licensed under CC BY-SA.
        <br />
        rev 2023.2.17.43248
      </p>
    </FirstDiv>
    // </footer>
  );
};

export default Footer;
