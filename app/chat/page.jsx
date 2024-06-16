"use client";

import React, { useState } from 'react';
import './page.css'
import { Menu } from "../../components/Menu"

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            const app = await client("https://hughiephan-rnn-reviewbot.hf.space");
            const result = await app.predict("/predict", [inputValue]);

            setMessages([
                ...messages,
                { type: 'text', content: inputValue },
                { type: 'review', content: result.data[0] }
            ]);

            setInputValue('');
        }
    };

    return (
        <div>
            <main className="flex flex-col items-center justify-center p-24">
                <Menu> </Menu>
            </main>

            <div className="container">

                <div className="header">
                    <img src="https://cdn-icons-png.flaticon.com/512/2233/2233922.png" alt="" className="avatar" />
                    <h3>Chatbot</h3>
                </div>
                <div id="chat" className="chat">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type}`}>
                            {msg.content}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    id="inputText"
                    placeholder="Please enter a comment"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>

    );
};