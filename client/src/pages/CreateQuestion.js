import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Content = styled.main`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  /* height: 100vh; */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: static;
  padding: 0px 3% 24px;
  /* transform: translate(-50%, -50%);
  top: 50%;
  left: 50%; */
  background-color: transparent;
  border-left: 0;
  border-right: 0;
  .top {
    h1 {
      padding-top: 1em;
      padding-bottom: 1em;
      font-weight: 600;
      text-align: center;
    }
  }
`;

const TitleBox = styled.section`
  background-color: #ebf4fb;
  border: 1px solid hsl(206, 85%, 57.5%);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  height: max-content;
  margin-top: 15px;
  min-width: 400px;
  text-align: left;
  width: 80%;
  .pbox {
    padding: 24px;
    border-radius: 1px;
    * {
      margin-bottom: 5px;
    }
  }
  h5 {
    margin-top: 10px;
  }
`;

const PList = styled.div`
  text-align: left;
  margin-top: 5px;
  padding-left: 30px;
`;

const ContentBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  .titlebox {
    background-color: white;
    text-align: left;
    padding: 30px;
    border: 1px solid hsl(210, 8%, 90%);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width: 80%;
    > input {
      border: 1px solid hsl(210, 8%, 90%);
      border-radius: 4px;
      height: 30px;
      margin-top: 10px;
      width: 100%;
      padding: 5px;
    }
  }
  .title {
    font-weight: 600;
    font-size: 1.15rem;
  }
  .content {
    text-align: left;
    flex-direction: column;
    padding: 24px;
    background-color: white;
    text-align: left;
    padding: 30px;
    border: 1px solid hsl(210, 8%, 90%);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width: 80%;
    margin-top: 20px;
    textarea {
      max-height: calc(var(--s-step) * 6);
      border: 1px solid hsl(210, 8%, 90%);
      border-radius: 4px;
      /* height: 300px; */
      margin-top: 10px;
      width: 100%;
      padding: 5px;
    }
  }
  button {
    color: white;
    background-color: hsl(206, 100%, 52%);
    margin-top: 20px;
    padding: 10px;
    border-radius: 3px;
  }
`;

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const url = '/questions';

  const handleTitleOnChange = (e) => {
    // 제목 핸들러함수
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleContentOnChange = (e) => {
    // 내용 핸들러함수
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const handSubmit = () => {
    console.log(title);
    console.log(content);
    axios
      .post(url, {
        title,
        content,
      })
      .then((res) => {
        navigate('/readquestion');
      })
      .catch((err) => console.log(err));
    alert('작성되었습니다.');
  };

  console.log(title);
  console.log(content);

  return (
    <>
      <Header />
      <Content>
        <div className="top">
          <h1>Ask a public question</h1>
        </div>
        <TitleBox>
          <div className="pbox">
            <h2>Writing a good question</h2>
            <p>
              You’re ready to ask a programming-related question and this form
              will help guide you through the process.
            </p>
            <p>
              Looking to ask a non-programming question? See the topics here to
              find a relevant site.
            </p>
            <h5>Steps</h5>
            <PList>
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </PList>
          </div>
        </TitleBox>
        <ContentBox onSubmit={handSubmit}>
          <div className="titlebox">
            <div className="title">Title</div>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input
              placeholder="e.g. Is there on R function for finding index of an element in a vertor?"
              value={title}
              onChange={handleTitleOnChange}
            ></input>
          </div>
          <div className="content">
            <div className="title">What are the details of your problem?</div>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <textarea
              value={content}
              onChange={handleContentOnChange}
            ></textarea>
          </div>
          <button type="submit" onClick={handSubmit}>
            Review your question
          </button>
        </ContentBox>
      </Content>
      <Footer />
    </>
  );
};

export default CreateQuestion;

/* TODO:
1. 기본 구조 구현 * 
2. styled-components 적용
3. input 창 구현 * 
4. input value 구현 * 
5. input 창 클릭 시 옆에 modal 구현
6. POST 요청 보내기
*/
