import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

/* list-style: disc */

const CreateBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: static;
  /* transform: translate(-50%, -50%);
  top: 50%;
  left: 50%; */
`;

const TopBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 60px;
  text-align: left;
  h1 {
    margin: 30px;
  }
  .pbox {
    background-color: #ebf4fb;
    padding: 50px;
    border: 1px solid hsl(206, 85%, 57.5%);
    border-radius: 1px;
  }
`;

// const PBox = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: center;
//   flex-direction: column;
//   text-align: left;
// `;

const PList = styled.div`
  text-align: left;
  padding-left: 50px;
`;

const ContentBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  border: 3px solid black;
  margin-top: 50px;
  .titlebox {
    text-align: left;
    padding: 50px;
  }
  .content {
    text-align: left;
    flex-direction: column;
    padding: 50px;
  }
`;

const CreateQuestion = () => {
  return (
    <CreateBox>
      <Header />
      <Content>
        <h1>Ask a public question</h1>
        <TopBox>
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
        </TopBox>
        <ContentBox>
          <div className="titlebox">
            <div className="title">Title</div>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input placeholder="e.g. Is there on R function for finding index of an element in a vertor?"></input>
          </div>
          <div className="content">
            <div>What are the details of your problem?</div>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <textarea></textarea>
            <button>Review your question</button>
          </div>
        </ContentBox>
      </Content>
      <Footer />
    </CreateBox>
  );
};

export default CreateQuestion;

/* TODO:
1. 기본 구조 구현
2. styled-components 적용
3. input 창 구현
4. input value 구현
5. input 창 클릭 시 옆에 modal 구현
*/
