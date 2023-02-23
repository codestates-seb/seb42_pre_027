import styled from 'styled-components';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

import { useNavigate } from 'react-router-dom';
import ListContainer from '../components/ListContainer';

const Container = styled.div`
  width: 100%;
  .content {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 1264px;
    margin: 0 auto;
  }
`;

const MainPage = styled.main`
  height: 100vh;
  display: flex;
  width: 100%;
  max-width: 1100px;
  align-items: flex-start;
  padding-top: 60px;
  > section {
    display: flex;
    width: 100%;
  }
  button {
    color: white;
    padding: 10px;
    background-color: hsl(206, 100%, 52%);
    border-radius: 3px;
  }
  .section-container {
    flex-direction: column;
  }
  .topbox {
    display: flex;
    align-items: center;
    flex-direction: column;
    .count {
      text-align: left;
      width: 100%;
      padding-top: 5px;
      padding-left: 30px;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 30px;
  }
`;

const Main = () => {
  const navigate = useNavigate();
  const goToCreateQuestion = () => {
    navigate('/createquestion');
  };
  return (
    <Container>
      <Header />
      <div className="content">
        <SideBar />
        <MainPage>
          <section className="section-container">
            <div className="topbox">
              <div className="top">
                <h1>All Questions</h1>
                <button onClick={goToCreateQuestion}>Ask Question</button>
              </div>
              <div className="count">39 questions</div>
            </div>
            <div>
              <ListContainer />
            </div>
          </section>
          <Aside />
        </MainPage>
      </div>
      <Footer />
    </Container>
  );
};

export default Main;

/* TODO: 
1. 기본 구조 구현
2. 컴포넌트 위치 조정
3. styled-componenst 적용
4. 데이터 불러오기
5. <div className="count">39 questions</div> 에 질문 length 적용
 */
