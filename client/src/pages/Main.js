import styled from 'styled-components';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/List';
import SideBar from '../components/SideBar';

import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  .content {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    /* max-width: 1264px; */
  }
`;

const MainPage = styled.main`
  height: 100%;
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: space-between;
  > main {
    display: flex;
  }
  > button {
    width: 500px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
    position: absolute;
    padding-top: 60px;
  }
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <div className="content">
        <SideBar />
        <MainPage>
          <section>
            <div className="top">
              <h1>All Questions</h1>
              <button>
                <Link to="/createquestion">Ask Question</Link>
              </button>
            </div>
            <List />
          </section>
          <Aside />
        </MainPage>
      </div>
      <Footer />
    </Container>
  );
};

export default Main;
