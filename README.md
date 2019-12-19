## Script

- "build:css": "postcss src/styles/App.css -o src/style.css",
- "watch:css": "postcss src/styles/App.css -o src/style.css -w",
- "start:app": "react-scripts start",
- "start": "npm-run-all -p watch:css start:app",
- "build:app": "react-scripts build",
- "build": "npm-run-all build:css build:app",

run `npm run start:app` to start the app. Granularity is key for me. For my all my projects, I set up my webpack, babel or gulp as the case might be and configure it to sooth project needs.


## Misc
Redux was used for state management to ensure pure functional component. In some component, the component state are used to handle form submission.


