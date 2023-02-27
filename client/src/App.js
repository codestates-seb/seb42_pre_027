import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle';

import BeforeLoginMain from './pages/BeforeLoginMain';
import CreateQuestion from './pages/CreateQuestion';
import Login from './pages/Login';
import Main from './pages/Main';
import ReadQuestion from './pages/ReadQuestion';
import SignUp from './pages/SignUp';
import UpdateQuestion from './pages/UpdateQuestion';

function App() {
  /* 상태, 라우터 */
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<BeforeLoginMain />}></Route>
          <Route path="/main">
            <Route
              index
              element={
                <Main
                  title={title}
                  setTitle={setTitle}
                  content={content}
                  setContent={setContent}
                />
              }
            ></Route>
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/readquestion/:id" element={<ReadQuestion />}></Route>
          <Route
            path="/createquestion"
            element={
              <CreateQuestion
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
              />
            }
          ></Route>
          <Route
            path="/updatequestion/:id"
            element={
              <UpdateQuestion
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
