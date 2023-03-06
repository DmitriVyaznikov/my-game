import './App.css';
import CustomNavbar from './Navbar/Navbar';
import Main from './Main/Main';
import { Route, Routes } from 'react-router-dom';
import ModalWin from './Modal/ModalWin';

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/personal"
          element={<div>personal</div>}
        />
        <Route
          path="/game"
          element={<div>Game with Start button</div>}
        ></Route>
        <Route
          path="/game/:id"
          element={<div>Game with cards</div>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
