import React, { useEffect, useRef } from 'react';
import { createDirectLine, renderWebChat } from 'botframework-webchat';
// import backgroundImage from './background.png';
import ChatHeader from './ChatHeader'; 

const Chatbot = () => {
  const chatContainer = useRef(null);

  useEffect(() => {
    // Replace with your Direct Line secret token
    const directLineToken = 'A-oSxjR5Ll4.DXNUlIYP2kLrho6gdqg3f-cC-lHvUafbjPy4PoINaTE';
    const directLine = createDirectLine({ token: directLineToken });

    if (chatContainer.current) {
        renderWebChat({
          directLine,
          styleOptions: {
            backgroundColor: '#DCDCDC',
            bubbleBackground: '#f5f5f5',
            backgroundImage: `url(/background.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            bubbleFromUserBackground: '#0078D7',
            bubbleBorderRadius: 10,
            bubbleFromUserBorderRadius: 10,
            bubbleTextColor: '#000000',
            bubbleFromUserTextColor: '#ffffff',
            botAvatarImage: 'https://example.com/bot-avatar.png',
            botAvatarInitials: 'Genie',
            userAvatarImage: 'https://example.com/user-avatar.png',
            userAvatarInitials: 'You',
            avatarSize: 40,
            sendBoxBackground: '#f1f1f1',
            sendBoxTextColor: '#000000',
            sendBoxButtonColor: '#0078D7',
            sendBoxButtonDisabledColor: '#999999',
            hideUploadButton: true,
            hideTypingIndicator: false,
            bubbleFromUserPadding: '10px 14px',
            bubblePadding: '10px 14px',
            typingIndicatorHeight: 20,
            timestampColor: '#888888',
            // timestampFormat: 'relative',
            suggestedActionBorderColor: '#0078D7',
            suggestedActionBackgroundColor: '#f1f1f1',
            suggestedActionTextColor: '#0078D7',
            
            // Additional Customizations
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            scrollbarWidth: 'thin', // For Firefox
            scrollbarColor: '#0078D7 #f5f5f5', // For Firefox
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            loadingSpinnerColor: '#0078D7',
            timestampFormat: 'absolute', // Example: '2024-09-13 12:34:56'
            sendBoxPlaceholder: 'Type your message here...',
            suggestedActionBorderRadius: '20px',
            suggestedActionPadding: '8px 12px',
            customCssClass: 'my-custom-chat',
            ariaLabel: 'Chat with our support bot'
          },
        }, chatContainer.current);
      }      
  }, []);

//   return <div ref={chatContainer} style={{ height: '100vh', width: '100%' }} >
//     <ChatHeader botName="Support Bot" /> {/* Add the header here */}
//   </div>;
// };
return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ChatHeader botName="Genie" /> {/* Add the header here */}
      <div ref={chatContainer} style={{ height: 'calc(100% - 45px)' }} /> {/* Adjust the height of the chat container */}
    </div>
  );
};

export default Chatbot;
