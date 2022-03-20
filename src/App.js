import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Room from "./pages/Room";
import NotFound404 from "./pages/NotFound404";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/room/:id" element={<Room/>}/>
                <Route path= "*" element={<NotFound404/>}/>
            </Routes>
        </div>
    );
}

export default App;
