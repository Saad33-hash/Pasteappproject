PasteNotes 📝
PasteNotes is a modern, client-side web application built with React and Vite that functions. It allows users to quickly create, manage, and share text snippets or "pastes" in a clean, responsive interface. The application's state is managed entirely on the client-side using Redux Toolkit, providing a fast and seamless user experience without needing a database.

✨ Features
Create & Edit Pastes: An intuitive form to create new text pastes with a title and content. Existing pastes can be easily edited.
List & View All Pastes: A dedicated page that displays all created pastes in a responsive grid layout.
Live Search: Instantly filter through your pastes by title to find exactly what you're looking for.
Dedicated View Page: Each paste has its own unique, read-only page for clean viewing.
One-Click Actions:
Copy to Clipboard: Copy the entire content of a paste with a single click.
Native Sharing: Use the browser's native share functionality to easily send pastes to others.
Delete: Quickly remove pastes you no longer need.
Responsive Design: A mobile-first design styled with Tailwind CSS that looks great on all devices.
User Feedback: Toast notifications provide clear feedback for actions like copying text.

🚀 Tech Stack
This project is built with a modern frontend toolchain:
Framework/Library: React 19
Build Tool: Vite
Routing: React Router DOM
State Management: Redux Toolkit
Styling: Tailwind CSS
Notifications: React Hot Toast
Icons: React Icons
Linting: ESLint

🏁 Getting Started
To get a local copy up and running, follow these simple steps.
Prerequisites
You must have Node.js (which includes npm) installed on your development machine.

Installation & Setup

Clone the repository:
code
Sh
git clone https://github.com/your-username/15-pasteappproject.git
Navigate to the project directory:
code
Sh
cd 15-pasteappproject

Install NPM packages:

code
Sh
npm install
Running the Application
Once the dependencies are installed, you can start the development server:
code
Sh
npm run dev
This will launch the application, and you can view it in your browser at http://localhost:5173 (or the next available port).


📦 Available Scripts
This project comes with several pre-configured npm scripts:
Script	Description
npm run dev	Starts the development server with Hot Module Replacement (HMR).
npm run build	Bundles the application for production into the dist folder.
npm run lint	Runs the ESLint checker to identify and fix code issues.
npm run preview	Serves the production build locally to preview the final app.

📁 Project Structure
The project is organized with a clear and scalable structure:
code
Code
/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons (edit, delete, etc.)
│   ├── Components/        # Reusable React components
│   │   ├── Home.jsx       # Page for creating/editing pastes
│   │   ├── Navbar.jsx     # Application navigation bar
│   │   ├── Pastes.jsx     # Page for listing and managing pastes
│   │   └── ViewPaste.jsx  # Read-only page for a single paste
│   ├── redux/
│   │   └── pasteslice.js  # Redux slice for managing paste state
│   ├── App.jsx            # Main app component with routing setup
│   ├── index.css          # Global styles and Tailwind CSS imports
│   └── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── index.html             # Main HTML template
├── package.json           # Project metadata and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration file

⚙️ How It Works
The application's logic is straightforward:
Routing: react-router-dom is used to define three main routes:
/: The Home page, used for creating new pastes. It can also be used for editing when a ?pasteid= query parameter is present.
/pastes: The Pastes page, which lists all existing pastes.
/viewpaste/:id: A dynamic route to the ViewPaste page for a specific paste.
State Management: Redux Toolkit manages the application's entire state. The pasteslice.js file defines the state shape and includes reducers for:
addtopaste: Adds a new paste object to the state array.
removefrompaste: Filters out a paste by its ID.
updatepaste: Finds a paste by its ID and updates its content.
Data Flow: Components use the useSelector hook to read data from the Redux store and the useDispatch hook to dispatch actions (like adding or deleting a paste). Since this is a client-side application, the state is not persisted and will reset on a full page refresh.