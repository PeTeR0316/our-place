import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/main';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Write from './pages/write';
import Store from './pages/store';
import Mypage from './pages/mypage';
import MypageReview from './components/mypage/review';

const AppStyle = styled.div`
  width: 100vw;
  
  * {
    box-sizing: border-box;
  }

  ul {
    list-style : none;
    padding-left: 0px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

function App() {
  return (
    <AppStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/write" element={<Write />} />
          <Route path="/store/:storeId" element={<Store />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/review" element={<MypageReview />} />
        </Routes>
      </BrowserRouter>
    </AppStyle>
  );
}

export default App;
