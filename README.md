# 💬 Real-Time Chat App

A beautiful, modern real-time chat application built with Node.js, Express, and Socket.IO.

![Chat App Preview](https://img.shields.io/badge/Status-Live-brightgreen)

## ✨ Features

- 🎨 **Beautiful Modern UI** - Gradient design with glassmorphism effects
- 💬 **Real-time Messaging** - Instant message delivery with Socket.IO
- 👥 **Join/Leave Notifications** - See when users enter or leave the chat
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Elegant transitions and effects
- 🌐 **CORS Support** - Can be opened directly as HTML file

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/BalajiVadivel0/chat-app.git
cd chat-app

# Install dependencies
npm install

# Start the server
node server.js

# Open your browser
# Go to http://localhost:3000
```

### Direct HTML Access
You can also open `public/index.html` directly in your browser - it will connect to the deployed server!

## 🌐 Deploy Your Own

### Deploy to Render (Recommended)
1. Fork this repository
2. Go to [Render](https://render.com)
3. Connect your GitHub account
4. Create a new Web Service
5. Select your forked repository
6. Render will automatically detect the `render.yaml` configuration
7. Click "Create Web Service"

### Deploy to Railway
1. Go to [Railway](https://railway.app)
2. Click "Deploy from GitHub repo"
3. Select this repository
4. Railway will automatically deploy using `railway.json`

### Deploy to Heroku
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create a new app
heroku create your-chat-app-name

# Deploy
git push heroku main
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Real-time**: Socket.IO
- **Styling**: Custom CSS with Inter font
- **Deployment**: Render, Railway, Heroku ready

## 📁 Project Structure

```
chat-app/
├── public/
│   ├── index.html      # Main chat interface
│   ├── client.js       # Client-side Socket.IO logic
│   └── style.css       # Beautiful styling
├── server.js           # Express + Socket.IO server
├── package.json        # Dependencies
├── render.yaml         # Render deployment config
├── railway.json        # Railway deployment config
├── Procfile           # Heroku deployment config
└── README.md          # This file
```

## 🎯 How It Works

1. **User opens the chat** → Gets prompted for their name
2. **User sends a message** → Broadcast to all connected users via Socket.IO
3. **Real-time updates** → All users see messages instantly
4. **Join/Leave notifications** → System messages when users connect/disconnect

## 🎨 Customization

The app uses CSS custom properties for easy theming. Main colors:
- Primary: `#4f46e5` (Indigo)
- Secondary: `#7c3aed` (Purple)
- Background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

## 📝 License

MIT License - feel free to use this project for learning or building your own chat applications!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Made with ❤️ by [BalajiVadivel0](https://github.com/BalajiVadivel0)**