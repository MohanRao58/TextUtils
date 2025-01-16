# TextUtils Project

TextUtils is a React-based application designed to help users manipulate and analyze text with ease. It includes features like text transformation, text analysis, and dark mode support. This project leverages React functional components, hooks, and Bootstrap for a responsive and dynamic user experience.

---

## Features
- **Convert Text to Uppercase or Lowercase**: Quickly transform your text.
- **Text Analysis**: View word and character counts along with reading time.
- **Remove Extra Spaces**: Clean up unnecessary spaces in your text.
- **Copy Text**: Copy text directly to your clipboard with a single click.
- **Dark Mode Support**: Toggle between light and dark themes for a better user experience.
- **Dynamic Alert System**: Get feedback on your actions via alerts.

---

## Components
### **Navbar**
- A responsive navigation bar with a dark mode toggle.
- Props:
  - `mode`: Specifies the current theme (`light` or `dark`).
  - `title`: Customizable title for the app.
  - `aboutText`: Customizable About section text.

### **TextForm**
- Main text manipulation tool with the following features:
  - Convert text to uppercase or lowercase.
  - Clear all text.
  - Remove extra spaces.
  - Copy text to clipboard.
- Props:
  - `heading`: The title for the TextForm component.
  - `mode`: Specifies the current theme (`light` or `dark`).
  - `showAlert`: Displays alerts for user actions.

### **Alert**
- Displays notifications for user actions.
- Props:
  - `alert`: Object containing the alert type (`success` or `error`) and message.

### **About**
- An accordion-style component explaining the app.
- Toggle between light and dark modes for the section.

---

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TextUtils.git

2. Navigate to the project directory:
cd TextUtils

3. Install dependencies:
npm install

4. Start the development server:
npm start

## Usage
1. Use the navigation bar to switch between the "Home" and "About" sections.
2. Enter your text in the textarea on the homepage.
3. Utilize the buttons to manipulate your text.
4. Toggle dark mode using the switch in the navbar.

## Technologies Used
React: Component-based library for building the user interface.
React Router: For navigation between components.
Bootstrap: For responsive and styled components.
JavaScript: For logic and interactivity.

## Folder Structure
TextUtils/
├── public/
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Alert.js
│   │   ├── Navbar.js
│   │   └── TextForm.js
│   ├── App.js
│   ├── index.js
│   └── App.css

## Screenshots
Light Mode
![image alt](https://github.com/MohanRao58/TextUtils/blob/dbd0ea714b319d857384789c01642a6728ce0ed4/lightmode.PNG)

Dark Mode
![image alt](https://github.com/MohanRao58/TextUtils/blob/dbd0ea714b319d857384789c01642a6728ce0ed4/darkmode.PNG)
