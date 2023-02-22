import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Answer from '../components/Answer';
import AnswerContainer from '../components/AnswerContainer';
import AnswerContent from '../components/AnswerContent';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuestionContent from '../components/QuestionContent';
import SideBar from '../components/SideBar';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
`;

const MainQuestion = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 24px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 10px;
  }
  .qtitle {
    font-size: 2em;
    margin-bottom: 8px;
  }
  .writinginfo {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #babfc3;
    > * {
      padding-bottom: 8px;
      margin-right: 16px;
      color: hsl(210, 8%, 45%);
    }
  }
  .section-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 20px;
  }
  .content {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .questioncontent {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #babfc3;
      padding-bottom: 16px;
    }
  }
  #create-btn {
    color: white;
    padding: 10px;
    background-color: hsl(206, 100%, 52%);
    border-radius: 3px;
    text-decoration: none;
  }
`;

const ReadQuestion = () => {
  const navigate = useNavigate();
  const goToCreateQuestion = () => {
    navigate('/createquestion');
  };
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <MainQuestion>
          <Content>
            <div className="top">
              <div className="qtitle">title</div>
              <button id="create-btn" onClick={goToCreateQuestion}>
                Ask Question
              </button>
            </div>
            <div className="writinginfo">
              <span>Asked 3 days ago</span>
              <span>Modified today</span>
              <span>View 39 times</span>
            </div>
            <section className="section-content">
              <div className="content">
                <QuestionContent />
                {/* <div className="questionanswer">답변</div> */}
                <AnswerContainer>
                  <AnswerContent />
                </AnswerContainer>
                <Answer />
              </div>
              <Aside />
            </section>
          </Content>
        </MainQuestion>
      </Container>
      <Footer />
    </>
  );
};

export default ReadQuestion;

/* TODO: 
1. 기본 구조 구현
2. 질문 렌더링 (DB에서 데이터 가져와서 렌더링)
2-1. data.title
2-2. data.content
2-3. data.writer
3. 답변 기능 구현
3-1. 답변 read
3-2. 답변 create
3-3. 답변 update
3-4. 답변 delete
*/
