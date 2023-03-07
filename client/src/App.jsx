import "./App.css";
import CustomNavbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import {Route, Routes} from "react-router-dom";
import ModalWin from "./Modal/ModalWin";
import {GameMain} from "./GameMain/GameMain";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUserInfo} from "./store/actions";

function App() {
    return (
        <>
            <CustomNavbar/>
            <ModalWin/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/personal" element={<div>personal</div>}/>
                {/* <Route path="/game" element={<div>Game with Start button</div>}></Route> */}
                <Route path="/game" element={<GameMain/>}></Route>
                <Route path="/game/:id" element={<div>Game with cards</div>}></Route>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </>
    );
}

export default App;
