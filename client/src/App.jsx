import './App.css';
import CustomNavbar from './Navbar/Navbar';
import Main from './Main/Main';
import { Route, Routes } from 'react-router-dom';
import ModalWin from './Modal/ModalWin';
import { GameMain } from './GameMain/GameMain';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './store/actions';
import { Personal } from './Personal/Personal';

function App() {
  const [questionModal, setQuestionModal] = useState(false);
  const [question, setQuestion] = useState({});
  console.log('-> question', question);

  return (
    <>
      <CustomNavbar />
      <ModalWin
        questionModal={questionModal}
        setQuestionModal={setQuestionModal}
        question={question}
      />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/personal"
          element={<Personal />}
        />
        {/* <Route path="/game" element={<div>Game with Start button</div>}></Route> */}
        <Route
          path="/game"
          element={
            <GameMain
              setQuestionModal={setQuestionModal}
              setQuestion={setQuestion}
            />
          }
        ></Route>
        <Route
          path="/game/:id"
          element={<div>Game with cards</div>}
        ></Route>
        <Route
          path="*"
          element={<h1>Page not found</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
