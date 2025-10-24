// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const socket = io();
  
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const messages = document.getElementById('messages');
  
  // Get username when page loads
  const username = prompt('Enter your name:') || 'Anonymous';
  
  // Send message
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      socket.emit('chat message', {
        user: username,
        message: input.value.trim()
      });
      input.value = '';
    }
  });
  
  // Receive messages
  socket.on('chat message', (data) => {
    displayMessage(data.user, data.message);
  });
  
  // System messages (join/leave)
  socket.on('system message', (msg) => {
    displaySystemMessage(msg);
  });
  
  // Connection status
  socket.on('connect', () => {
    console.log('Connected to server');
  });
  
  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
  
  function displayMessage(user, msg) {
    // Remove welcome message on first real message
    const welcomeMsg = messages.querySelector('.welcome-msg');
    if (welcomeMsg) {
      welcomeMsg.remove();
    }
    
    const item = document.createElement('div');
    item.classList.add('message');
    item.innerHTML = `<strong>${user}:</strong> ${msg}`;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function displaySystemMessage(msg) {
    // Remove welcome message on first system message too
    const welcomeMsg = messages.querySelector('.welcome-msg');
    if (welcomeMsg) {
      welcomeMsg.remove();
    }
    
    const item = document.createElement('div');
    item.classList.add('system-message');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
  }
});