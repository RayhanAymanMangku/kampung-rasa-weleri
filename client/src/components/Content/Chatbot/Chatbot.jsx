import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { user: 'You', text: message },
        ]);

        try {
            const response = await axios.post('http://localhost:3060/api/v1/chatbot', { message });
            const botMessage = response.data.reply;

            // Split the bot's message into lines
            const formattedBotMessage = botMessage.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
            ));

            setMessages((prevMessages) => [
                ...prevMessages,
                { user: 'Bot', text: formattedBotMessage },
            ]);
        } catch (error) {
            console.error('Error:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { user: 'Bot', text: 'Maaf, terjadi kesalahan saat memproses permintaan Anda.' },
            ]);
        }
    };

    return (
        <div>
            <div className="flex flex-col h-96 w-full border border-gray-300 rounded-md p-4 space-y-2 mt-2 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className={`text-sm ${message.user === 'You' ? 'text-right' : 'text-left'}`}>
                        <span className="font-bold">{message.user}:</span> {message.user === 'Bot' ? message.text : message.text}
                    </div>
                ))}
            </div>
            <div className="flex space-x-2 mt-2">
                <input
                    type="text"
                    placeholder="Ketik pesan Anda..."
                    className="border border-gray-300 rounded-md p-2 w-full"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim() !== '') {
                            sendMessage(e.target.value.trim());
                            setInput('');
                        }
                    }}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                        if (input.trim() !== '') {
                            sendMessage(input.trim());
                            setInput('');
                        }
                    }}
                >
                    Kirim
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
