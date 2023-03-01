import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AnswerContainer from '../components/AnswerContainer';
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
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/questions/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <MainQuestion>
          <Content>
            <section className="section-content">
              <div className="content">
                <QuestionContent detail={detail} setDetail={setDetail} />
                <Aside />
              </div>
            </section>
            <AnswerContainer detail={detail} />
           
          </Content>
        </MainQuestion>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default ReadQuestion;

/* TODO: 
1. 기본 구조 구현 * 
2. 질문 렌더링 (DB에서 데이터 가져와서 렌더링) *
2-1. data.title *
2-2. data.content *
2-3. data.writer *
3. 답변 기능 구현
3-1. 답변 read
3-2. 답변 create
3-3. 답변 update
3-4. 답변 delete
*/
