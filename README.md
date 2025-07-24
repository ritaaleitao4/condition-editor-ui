# Condition-Editor-UI
Condition Editor UI - A Coding Exercise for UI Developers

## Overview
This project is a web-based Condition Editor UI designed to filter products based on user-defined conditions. Users can select a property, operator, and value to create filters, and the product list updates dynamically based on the filter.
This solution was made in React + TypeScript application bootstrapped with Vite, using Zustand for global state management, MUI for UI components, and Vitest + react-testing-library for unit testing.

## How to use

1. Clone the repository: `git clone https://github.com/ritaaleitao4/condition-editor-ui.git`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Run tests: `npm run test`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Folder Structure and Description

```
/condition-editor-ui
├── public/
├── src/
│   ├── api/                                  # Contains API integration logic for fetching data such as products, properties, and operators.
│   ├── components/                           # Contains all React components.
│   │   ├── controls/                         # Contains form controls for selecting properties, operators, and values.
│   │   │   ├── AutocompleteControl/          # Component that Provides autocomplete functionality for user input.
│   │   │   ├── SelectFormControl/            # Component Custom select dropdown for filtering options.
│   │   │   └── TextFieldFormControl/         # Component for Text input field for entering filter values.
│   │   │   └── ValueFilterControl/           # Component for handling value-based filtering logic.
│   │   ├── FilterProductTable/               # Component for building filter conditions.
│   │   └── ProductTable/                     # Component that displays filtered product data in a tabular format.
│   ├── data/                                 # Contains Zustand stores and data management logic.
│   ├── helpers/                              # Includes utility functions for filtering and other operations.
│   ├── shared/                               # Houses shared types, constants, and reusable logic.
│   ├── test/                                 # Contains setup for tests
│   ├── theme/                                # Defines the application's MUI theme and palette.
│   ├── App.tsx                               # Entry point for the React application, defines the main application component.
│   └── main.tsx                              # Initializes the React application and renders the `App` component into the DOM.
├── esling.config.mjs                         # Configuration file for ESLint, used for linting and enforcing coding standards.
├── index.html                                # The main HTML file that serves as the entry point for the application.
├── package.json                              # Contains metadata about the project and its dependencies.
├── tsconfig.json                             # TypeScript configuration file, defines compiler options and project settings.
└── vite.config.ts                            # Configuration file for Vite, the build tool used in the project.
└── vitest.config.ts                          # Configuration file for Vitest, the testing framework used in the project.
```

## Features
- Dynamic filtering of products based on user input.
- Support for multiple property types and operators.
- Clear filter functionality to reset the product list.

### Time Spent
- **Total Time**: ~11 hours
  - **Planning**: ~2 hours
  - **Implementation**: ~6 hours
  - **Testing**: ~2 hours
  - **Documentation**: ~1 hour

### Development Notes
  `Initial Setup`: The project was bootstrapped using Vite's React + TypeScript template for its simplicity and fast development workflow. MUI was chosen for the UI due to its rich feature set and ease of customization, including the creation of a salsify color palette.  
  `Component Design`: The UI was divided into modular and reusable components to ensure maintainability and scalability. For example, components like FilterProductTable and ProductTable were designed to handle specific responsibilities, while smaller controls such as ValueFilterControl were created for focused functionality.  
  `State Management`: Zustand was selected for global state management due to its lightweight nature and suitability for this project's scale. The datastore was organized into a dedicated file to simulate real-world scenarios where data fetching would occur in the store rather than directly in components.  
  `Linting`: ESLint was configured to enforce consistent coding standards and maintain code quality throughout the development process.  
  `Development Iteration`: The development process followed a structured approach, starting with the implementation of filter logic, followed by the UI design, and finally testing. Iterations were made as needed to refine functionality and ensure a seamless user experience.
