import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ReactComponent as LockLogo } from '../svg/svg-lock.svg';
import { ReactComponent as SearchLogo } from '../svg/svg-search.svg';

const BackGround = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3337;
  margin: 0 auto;
  max-width: 1264px;
  height: 100vh;
  .boxes {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 100px;
    position: fixed;
    .box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo-wrapper {
      padding-top: 10px;
      padding-bottom: 50px;
    }
    .orange-box {
      background-color: #fde3cd;
      width: 340px;
      height: 250px;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
    }
    .blue-box {
      background-color: #cce9fe;
      width: 340px;
      height: 250px;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
    }
  }
  #intro {
    padding-top: 10px;
    color: white;
  }
`;

const BeforeLoginMain = () => {
  return (
    <div>
      <Header />
      <BackGround>
        <main className="boxes">
          <div className="box">
            <div className="orange-box">
              <div className="logo-wrapper">
                <SearchLogo fill="#F2740E" />
              </div>
              <h3>
                Find the best answer to your technical question, help others
                answer theirs
              </h3>
            </div>
            <div className="blue-box">
              <div className="logo-wrapper">
                <LockLogo fill="#0995FF" />
              </div>
              <h3>
                Want a secure, private space for your technical knowledge?
              </h3>
            </div>
          </div>
          <h2 id="intro">로그인 후 서비스를 이용하실 수 있습니다.</h2>
        </main>
      </BackGround>
      <Footer />
    </div>
  );
};

export default BeforeLoginMain;
