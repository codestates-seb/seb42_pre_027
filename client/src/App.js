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
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<BeforeLoginMain />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/readquestion" element={<ReadQuestion />}></Route>
          <Route path="/createquestion" element={<CreateQuestion />}></Route>
          <Route path="/updatequestion" element={<UpdateQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
