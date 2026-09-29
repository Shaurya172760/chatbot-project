import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [ inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      sendMessage();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      setInputText('');
    }
  }

  function sendMessage() {
    if (inputText !== '') {
      const chatMsgs_NewUserMsg = [
        ...chatMessages,
        {
          message: inputText,
          sender: 'user',
          time: dayjs().format('hh:mm A'),
          id: crypto.randomUUID()
        }
      ]
      setChatMessages(chatMsgs_NewUserMsg); 

      const response = Chatbot.getResponse(inputText);
      const chatMsgs_NewRobotResponse = [
        ...chatMsgs_NewUserMsg,
        {
          message: response,
          sender: 'robot',
          time: dayjs().format('hh:mm A'),
          id: crypto.randomUUID()
        }
      ]
      setChatMessages(chatMsgs_NewRobotResponse); 
      localStorage.setItem('chatHistory',JSON.stringify(chatMsgs_NewRobotResponse));

      setInputText('');
    }
  }

  return (
    <div className="chat-input-container"> 
      <input 
        className="chat-input"
        type="text"
        placeholder="Send a message to Chatbot" 
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
      <button onClick={sendMessage} className="send-button">Send</button>
    </div>
  );
}