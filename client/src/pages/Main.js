import styled from 'styled-components';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

import { Link } from 'react-router-dom';

const MainPage = styled.main`
  display: flex;
  > button {
    width: 500px;
  }
`;

const Main = () => {
  return (
    <>
      <Header />
      <SideBar />
      <MainPage>
        <button>
          <Link to="/createquestion">Ask Question</Link>
        </button>
        <Aside />
      </MainPage>
      <Footer />
    </>
  );
};

export default Main;
