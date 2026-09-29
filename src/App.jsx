import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessage from './components/ChatMessage';
import { Chatbot } from 'supersimpledev';
import ChatbotResponses from './assets/chatbotResponses';
import './App.css';

function App() {
  useEffect(() => {
    Chatbot.addResponses(ChatbotResponses);
  },[]);
  const [ chatMessages, setChatMessages ] = useState(JSON.parse(localStorage.getItem('chatHistory')) || []);

  return (
    <div className="app-container">
      <ChatMessage 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} 
      />
    </div>
  );
}

export default App
