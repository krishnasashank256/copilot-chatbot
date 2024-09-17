import React, { useEffect, useRef } from 'react';
import { createDirectLine, renderWebChat } from 'botframework-webchat';
import ChatHeader from './ChatHeader';

const Chatbot = () => {
  const chatContainer = useRef(null);

  useEffect(() => {
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
          suggestedActionBorderColor: '#0078D7',
          suggestedActionBackgroundColor: '#f1f1f1',
          suggestedActionTextColor: '#0078D7',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#0078D7 #f5f5f5',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          loadingSpinnerColor: '#0078D7',
          timestampFormat: 'absolute',
          sendBoxPlaceholder: 'Type your message here...',
          suggestedActionBorderRadius: '20px',
          suggestedActionPadding: '8px 12px',
          customCssClass: 'my-custom-chat',
          ariaLabel: 'Chat with our support bot'
        },
        // Voice support with customization
        webSpeechPonyfillFactory: window.WebChat.createBrowserWebSpeechPonyfillFactory({
          speechSynthesisUtterance: utterance => {
            utterance.pitch = 1.0; // Adjust pitch for a more natural sound
            utterance.rate = 1.1;  // Adjust rate for speech speed
            utterance.volume = 1.0; // Set the volume to maximum
            // Optionally log or modify the speech text before it is spoken
            console.log("Speaking:", utterance.text);
          }
        })
      }, chatContainer.current);
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ChatHeader botName="Genie" /> {/* Add the header here */}
      <div ref={chatContainer} style={{ height: 'calc(100% - 45px)' }} /> {/* Adjust the height of the chat container */}
    </div>
  );
};

export default Chatbot;
