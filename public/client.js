const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

const username = prompt('Enter your name:') || 'Anonymous';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit('chat message', {
      user: username,
      message: input.value.trim()
    });
    displayMessage(username, input.value.trim(), 'user');
    input.value = '';
  }
});

socket.on('chat message', (data) => {
  if (data.user !== username) {
    displayMessage(data.user, data.message, 'other');
  }
});

socket.on('system message', (msg) => {
  const item = document.createElement('div');
  item.classList.add('message', 'system');
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

function displayMessage(user, msg, type) {
  const item = document.createElement('div');
  item.classList.add('message', type);
  item.innerHTML = `<strong>${user}</strong>: ${msg}`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}
