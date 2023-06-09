import './App.css';
import CustomNavbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import {Route, Routes} from "react-router-dom";
import ModalWin from "./Modal/Modal";

function App() {
  return (
      <>
          <CustomNavbar/>
          {/* <ModalWin/> */}
          <Routes>
              <Route path="/main" element={<Main />} />
              <Route
                  path="/personal"
                  element={<div>personal</div>}
              />
              <Route path="/game" element={<div>Game with Start button</div>}></Route>
              <Route path="/game/:id" element={<div>Game with cards</div>}></Route>
          </Routes>
      </>
  );
}

export default App;
