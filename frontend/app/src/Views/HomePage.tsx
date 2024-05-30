import React, { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HomePage = () => {
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        sessionStorage.setItem("username", username);
        navigate("/chat");
    };

    return (
        <div className="center_div">
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default HomePage;
