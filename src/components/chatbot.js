// components/Chatbot.js
import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = { text: input, user: true };
    setMessages([...messages, userMessage]);
    setInput('');

    const response = await axios.post('/api/generate', {
      prompt: input,
    });

    const botMessage = { text: response.data.text, user: false };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.user ? 'right' : 'left', margin: '10px 0' }}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSend} style={{ width: '20%', padding: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default Chatbot;
