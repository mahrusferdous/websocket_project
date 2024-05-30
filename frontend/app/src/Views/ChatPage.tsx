import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { io } from "socket.io-client";
import MessageInput from "../components/MessageInput";
import ChatBody from "../components/ChatBody";
import "../App.css";

const socket = io("http://127.0.0.1:5000", {
    autoConnect: false,
});

const ChatPage = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const getName = sessionStorage.getItem("username");

    const handleConnect = () => {
        socket.connect();
        setIsConnected(true);
    };

    const handleDisconnect = () => {
        socket.disconnect();
        setIsConnected(false);
    };

    return (
        <div className="center_div">
            <Container>
                <h1>{getName}</h1>
                <p>Connection Status: {isConnected ? "Connected to Flask Server" : "Disconnected from Flask Server"}</p>
                {isConnected ? (
                    <div>
                        <div className="chat">
                            <MessageInput socket={socket} />
                            <ChatBody socket={socket} />
                        </div>
                        <br />
                        <Button variant="danger" onClick={handleDisconnect}>
                            Disconnect from Server
                        </Button>
                    </div>
                ) : (
                    <Button variant="primary" onClick={handleConnect}>
                        Connect to Server
                    </Button>
                )}
            </Container>
        </div>
    );
};
export default ChatPage;
