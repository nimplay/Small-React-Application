# RFP Management System
A modern application for managing Request for Proposals (RFP) built with React, TypeScript, and Tailwind CSS.

## 🚀 Features
**RFP Management:** Create, view, and filter proposals

**Modern Interface:** Responsive design with Tailwind CSS

**Type Safety:** Built with TypeScript

**Advanced Filtering:** Search and filter by status and agreement type

**Smart Grouping:** Automatic organization by events

**Horizontal Scroll:** Smooth card navigation

## 🛠️ Tech Stack
**Frontend:** React 18 + TypeScript

**Build Tool:** Vite

**Styling:** Tailwind CSS

**State Management:** Zustand

**Icons:** Integrated SVG

## 📦 Installation
### Prerequisites
Node.js 18+

npm or yarn

### Setup Steps
**1. Clone the repository**

git clone [<repository-url>](https://github.com/nimplay/Small-React-Application.git)
cd rfp-management-system

**2. Install dependencies**

npm install or yarn install

**3. Run in development mode**

npm run dev or yarn dev

**4. Open in browser**

http://localhost:5173

## 🏗️ Available Scripts

### Development
npm run dev or npx vite

### Production build
npm run build

### Preview build
npm run preview

### Linting
npm run lint

### Type checking
npm run type-check

## 🏛️ Project Structure

src/
├── components/
│ ├── ui/ # Reusable UI components
│ └── features/ # Feature-specific components
├── stores/ # Global state with Zustand
├── types/ # TypeScript definitions
├── utils/ # Utility functions
└── data/ # Mock data and constants

## 🎯 Key Components

RfpList: Main listing with event grouping

RfpCard: Individual RFP card component

RfpFilters: Search and filter functionality

EventHeader: Event section headers with color coding

## 🔧 Development

### Adding New Features
1. Create component in appropriate directory

2. Define TypeScript interfaces in src/types/

3. Add state management in stores if needed

4. Follow existing patterns for consistency

### Styling Guidelines
- Use Tailwind CSS utility classes

- Maintain consistent spacing and colors

- Ensure responsive design

### 👨‍💻 Author
Nimrod Acosta - Full Stack Developer
[LinkedIn](https://www.linkedin.com/in/nimrod-acosta/)


## 📄 License
This project is proprietary and confidential.
