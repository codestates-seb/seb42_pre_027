import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Answer from '../components/Answer';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 24px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
    > * {
      padding-bottom: 8px;
      margin-right: 16px;
      color: hsl(210, 8%, 45%);
    }
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .questioncontent {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #babfc3;
      padding-bottom: 16px;
    }
  }
`;

const ReadQuestion = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <MainQuestion>
          <Content>
            <div className="top">
              <div className="qtitle">title</div>
              <button>
                <Link to="/createquestion">Ask Question</Link>
              </button>
            </div>
            <div className="writinginfo">
              <span>Asked 3 days ago</span>
              <span>Modified today</span>
              <span>View 39 times</span>
            </div>
            <div className="content">
              <div className="questioncontent">
                <div>숫자</div>
                <div className="">ddddd</div>
              </div>
              <div className="questionanswer">답변</div>
              <Answer />
              <Aside />
            </div>
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
