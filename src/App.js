import './App.css';
import AuthorizationComponent from "./components/AuthorizationComponent";
import LogOutComponent from "./components/LogOutComponent";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={'main'}>
            <Routes>
                <Route path={'/authorization'} element={<AuthorizationComponent/>}/>
                <Route path={'/logOut'} element={<LogOutComponent/>}/>
                <Route path="" element={<Navigate to="/authorization"/>}/>
            </Routes>
        </div>
    );
}

export default App;
