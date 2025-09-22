# 🎮 PLAYED - Interactive Educational Platform

A complete web platform for modular and adaptive educational games, designed for students and teachers. Built with modern technologies and a scalable architecture.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.1.0-blue.svg)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green.svg)

## 📋 Table of Contents

- [🎯 Key Features](#-key-features)
- [🎮 Game Types](#-game-types)
- [🏗️ Architecture](#️-architecture)
- [🚀 Installation & Setup](#-installation--setup)
- [📊 API Endpoints](#-api-endpoints)
- [🎨 Design System](#-design-system)
- [🏆 Progress & Trophy System](#-progress--trophy-system)
- [👥 User Management](#-user-management)
- [🧪 Testing](#-testing)
- [🔧 Configuration](#-configuration)
- [📈 Advanced Features](#-advanced-features)
- [🤝 Contributing](#-contributing)

## 🎯 Key Features

### ✨ Core Functionality
- **Full Authentication System**: Registration, login, profile management for students and teachers
- **Interactive Games**: Quiz, Memory, Matching, Sorting with progressive difficulty
- **Level System**: Automatic progression based on performance
- **Progress Tracking**: Detailed statistics and analytics
- **Trophy System**: Achievements and rewards
- **Teacher Panel**: Tools to create and manage educational content
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Smart Recommendations**: AI-powered personalized suggestions

### 🎯 Target Users
- **Students**: Elementary, middle, and high school
- **Teachers**: Content creation, progress monitoring, class management
- **Administrators**: Platform management and analytics

## 🎮 Game Types

### 🧠 Interactive Quizzes
- **Categories**: Math, Science, Geography, History, Italian
- **Features**:
  - Configurable category-based timers
  - Multiple-choice questions
  - Instant feedback with animations
  - Dynamic scoring system
  - Randomized options to avoid memorization

### 🃏 Memory Games
- **Categories**: Animals, Colors, Shapes, Numbers
- **Features**:
  - Card pair matching
  - Smooth CSS3 animations
  - Optional timer
  - Progressive difficulty (6–16 pairs)

### 🔗 Matching Games
- **Categories**: Logical associations, Synonyms, Definitions
- **Features**:
  - Intuitive drag & drop
  - Instant visual feedback
  - Color-coded pair system
  - Attempt tracking

### 📊 Sorting Games
- **Categories**: Numerical, alphabetical, chronological order
- **Features**:
  - Drag & drop interface with @dnd-kit
  - Automatic validation
  - Educational feedback
  - Increasing difficulty

## 🏗️ Architecture

### 🖥️ Frontend (React 19)
```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Avatar.jsx       # User avatar system
│   │   ├── GameBadge.jsx    # Game cards
│   │   ├── Stepper.jsx      # Multi-step wizard
│   │   └── LevelUnlockModal.jsx
│   ├── games/               # Implemented games
│   │   ├── Quiz/            # Quiz system
│   │   ├── Memory/          # Memory game
│   │   ├── Matching/        # Matching game
│   │   └── Sorting/         # Sorting game
│   ├── pages/               # Main pages
│   │   ├── Home.jsx         # Main dashboard
│   │   ├── Profile.jsx      # User profile
│   │   ├── TeacherPanel.jsx # Teacher panel
│   │   └── Results.jsx      # Results & statistics
│   ├── core/                # Core logic
│   │   ├── AuthContext.js   # Authentication management
│   │   └── api.js           # API client
│   └── styles/              # CSS system
│       ├── design-system.css
│       └── variables.css
```

### ⚙️ Backend (Node.js + Express)
```
backend/
├── src/
│   ├── controllers/        # Business logic
│   │   ├── userController.js
│   │   ├── progressController.js
│   │   ├── questionController.js
│   │   └── trophyController.js
│   ├── models/             # MongoDB models
│   │   ├── User.js         # User schema
│   │   ├── Progress.js     # Progress schema
│   │   ├── Trophy.js       # Trophy schema
│   │   └── Question.js     # Question schema
│   ├── services/           # Business services
│   │   ├── progressService.js
│   │   ├── trophyService.js
│   │   └── questionService.js
│   ├── routes/             # API definitions
│   └── utils/              # Utilities
│       ├── authMiddleware.js
│       ├── errorHandler.js
│       └── recommendationEngine.js
└── tests/                  # Complete test suite
```

### 🔄 Shared
```
shared/
└── constraints.js          # Shared configurations
```

## 🚀 Installation & Setup

### 📋 Prerequisites
- **Node.js**: >= 16.0.0
- **MongoDB**: >= 4.4
- **npm**: >= 8.0.0

### ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/LorussoMarco/played
cd played
```

2. **Install dependencies**
```bash
# Root dependencies
npm install

# Frontend dependencies
cd frontend
npm install
cd ..

# Backend dependencies
cd backend
npm install
cd ..
```

3. **Configure environment variables**

Create a `.env` file in the project root:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/played

# Server
PORT=4000
FRONTEND_URL=http://localhost:3000

# JWT
JWT_SECRET=your-super-secret-key-here
JWT_EXPIRE=7d

# Node Environment
NODE_ENV=development
```

4. **Start the services**

**Terminal 1 - Backend:**
```bash
npm run start:backend
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

5. **Access the application**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000

## 📊 API Endpoints

### 🔐 Authentication
- `POST /api/users` - User registration
- `POST /api/users/auth/login` - Login
- `POST /api/users/auth/logout` - Logout
- `GET /api/users/profile` - User profile

### 🎮 Games
- `GET /api/games` - List available games
- `GET /api/games/:id` - Game details

### ❓ Questions
- `GET /api/questions` - List all questions
- `GET /api/questions/:category` - Questions by category
- `POST /api/questions` - Create question (teachers)
- `PUT /api/questions/:id` - Update question (teachers)
- `DELETE /api/questions/:id` - Delete question (teachers)

### 📈 Progress
- `GET /api/progress` - User progress
- `POST /api/progress` - Save game progress
- `GET /api/progress/questions` - Filtered questions by level
- `GET /api/progress/stats` - Detailed statistics

### 🏆 Trophies
- `GET /api/trophy` - Available trophies
- `GET /api/trophy/user` - User trophies
- `POST /api/trophy/check` - Check for new trophies

## 🎨 Design System

### 🎨 Color Palette
```css
:root {
  /* Primary Colors */
  --primary: #4A90E2;
  --secondary: #F7C873;
  --accent: #4AE290;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-success: linear-gradient(135deg, #4AE290 0%, #2DD4BF 100%);
  --gradient-warning: linear-gradient(135deg, #F7C873 0%, #F59E0B 100%);
  
  /* States */
  --success: #4AE290;
  --error: #F55A5A;
  --warning: #F7C873;
  --info: #4A90E2;
}
```

### 🎯 UI Components
- **Design System**: Consistent design with CSS variables
- **Animations**: Smooth transitions with CSS3 and Framer Motion
- **Responsive**: Grid system and optimized breakpoints
- **Accessibility**: ARIA labels, WCAG 2.1 AA contrast

## 🏆 Progress & Trophy System

### 📊 Level System
- **Automatic Calculation**: Based on accumulated XP
- **Progressive Thresholds**: Increasing difficulty at higher levels
- **Content Unlocking**: New questions and games per level

### 🏅 Trophy Types
- **Level**: Reach level X
- **Completion**: Complete Y games
- **Streak**: Play for X consecutive days
- **Performance**: Achieve perfect scores
- **Category**: Mastery of a specific subject

### 📈 Analytics
- Playtime per session
- Completion rate by category
- Detailed progression tracking
- Identification of improvement areas

## 👥 User Management

### 👨‍🎓 Students
- **Customizable Profiles**: Avatars, school info
- **Progress Tracking**: Personalized dashboard
- **Recommendations**: AI-suggested content based on performance

### 👨‍🏫 Teachers
- **Dedicated Panel**: Content management interface
- **Question Creation**: Integrated quiz editor
- **Content Management**: Full CRUD for educational materials

### 🔒 Security
- **JWT Authentication**: Secure tokens with expiration
- **Password Hashing**: bcrypt with salt rounds
- **Input Validation**: Joi schema validation
- **Security Middleware**: Rate limiting, configured CORS

## 🧪 Testing

### 🔬 Backend Testing
```bash
cd backend
npm test                # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

### ⚡ Frontend Testing
```bash
cd frontend
npm test                # Test React components
npm run test:coverage   # Coverage report
```

### 📋 Test Coverage
- **Models**: Unit tests for all MongoDB models
- **Services**: Business logic tests
- **API**: Endpoint integration tests
- **Components**: React Testing Library

## 🔧 Configuration

### ⚙️ Shared Configurations
The `shared/constraints.js` file centralizes:
- Form & input validation
- Game configurations
- Level thresholds & scoring
- Categories & taxonomies

### 🎮 Game Configuration
```javascript
const GAME_CONFIGS = {
  QUIZ_TIME_LIMITS: {
    math: 20,
    science: 25,
    geography: 25,
    history: 35,
    italian: 30
  },
  MEMORY_CATEGORIES: {
    animals: 'Animals',
    colors: 'Colors',
    shapes: 'Shapes'
  }
};
```

## 🚀 Deployment

### 🌐 Production Build
```bash
# Build frontend
cd frontend
npm run build

# Backend is production-ready
cd ../backend
npm start
```

### 📦 Production Variables
```env
NODE_ENV=production
MONGODB_URI=mongodb://your-production-db
JWT_SECRET=your-super-secure-production-secret
FRONTEND_URL=https://your-domain.com
```

---

<div align="center">

**🎓 PLAYED - Learning Through Fun! 🎮**

*Built with ❤️ for digital education*

[⭐ Star on GitHub](https://github.com/LorussoMarco/played) | [🐛 Report Bug](https://github.com/LorussoMarco/played/issues) | [💡 Feature Request](https://github.com/LorussoMarco/played/issues)

</div>
