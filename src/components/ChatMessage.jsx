import { useRef, useEffect } from 'react';
import { ChatMessageFormat } from './ChatMessageFormat';
import './ChatMessage.css';

function ChatMessage({chatMessages}) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  },[chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(chatMessage => {
        return (
          <ChatMessageFormat
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id} 
          />
        );
      })}
    </div>
  );
}

export default ChatMessage;