import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import ChatPage from "./Views/ChatPage";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/chat"} element={<ChatPage />} />
        </Routes>
    );
};

export default App;
