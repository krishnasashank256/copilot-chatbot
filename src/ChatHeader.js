import React from 'react';

const ChatHeader = ({ botName }) => {
  return (
    <div style={{
      backgroundColor: '#0078D7',
      color: '#ffffff',
      padding: '10px 15px',
      fontSize: '16px',
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: '10px 10px 0 0'
    }}>
      {botName}
    </div>
  );
};

export default ChatHeader;
