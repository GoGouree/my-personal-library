# My React App

This project is a simple React application that demonstrates how to create a front-end UI with widgets that redirect to sub-pages. It utilizes React Router for navigation between different components.

## Project Structure

```
my-react-app
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── Widget.tsx      # Widget component for navigation
│   │   └── SubPage.tsx     # Sub-page component
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       └── App.css         # CSS styles for the application
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-react-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Components

- **Widget**: A functional component that renders a button or link. Clicking it redirects the user to a specified sub-page.
- **SubPage**: A functional component that displays content for a specific sub-page. It can receive props to customize its content.

## Routing

The application uses React Router to manage navigation between the main page and sub-pages. Ensure that you have the necessary routes set up in `App.tsx`.

## License

This project is licensed under the MIT License.