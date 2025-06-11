const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

const username = prompt('Enter your name:');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', {
            user: username,
            message: input.value
        });
        input.value = '';
    }
});

socket.on('chat message', (data) => {
    const item = document.createElement('div');
    item.textContent = `${data.user}: ${data.message}`;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});

socket.on('system message', (msg) => {
    const item = document.createElement('div');
    item.style.color = 'gray';
    item.style.fontStyle = 'italic';
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});
