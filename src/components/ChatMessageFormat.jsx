import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessageFormat.css';

export function ChatMessageFormat({ message, sender, time }) {
  return (
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'robot' && <img src={RobotProfileImage} className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">{time}</div>
      </div>
      {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile" />}
    </div>
  );
}