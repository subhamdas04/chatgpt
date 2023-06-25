document.addEventListener('DOMContentLoaded', function() {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');
  
    // Event listener for Enter key press
    userInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const message = userInput.value.trim();
  
        if (message !== '') {
          appendMessage('You', message);
          // Perform chatbot processing and generate response here
          // Example: appendMessage('ChatGPT', 'Hello, how can I assist you?');
  
          userInput.value = '';
        }
      }
    });
  
    sendButton.addEventListener('click', function(e) {
      e.preventDefault();
      const message = userInput.value.trim();
  
      if (message !== '') {
        appendMessage('You', message);
        // Perform chatbot processing and generate response here
        // Example: appendMessage('ChatGPT', 'Hello, how can I assist you?');
  
        userInput.value = '';
      }
    });
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatHistory.appendChild(messageElement);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }
  });
  
  // Import the axios library
const axios = require('axios');

document.addEventListener('DOMContentLoaded', function() {
  const chatHistory = document.getElementById('chat-history');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-btn');

  // Event listener for Enter key press
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const message = userInput.value.trim();

      if (message !== '') {
        appendMessage('You', message);
        fetchChatbotResponse(message);
        userInput.value = '';
      }
    }
  });

  sendButton.addEventListener('click', function(e) {
    e.preventDefault();
    const message = userInput.value.trim();

    if (message !== '') {
      appendMessage('You', message);
      fetchChatbotResponse(message);
      userInput.value = '';
    }
  });

  async function fetchChatbotResponse(message) {
    try {
      const response = await axios.post('/api/chat', { query: message });
      const chatbotResponse = response.data.response;
      appendMessage('ChatGPT', chatbotResponse);
    } catch (error) {
      console.error(error);
      // Handle error response from the API
      appendMessage('ChatGPT', 'Oops! Something went wrong.');
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
});

// api

