## Script

- "build:css": "postcss src/styles/App.css -o src/style.css",
- "watch:css": "postcss src/styles/App.css -o src/style.css -w",
- "start:app": "react-scripts start",
- "start": "npm-run-all -p watch:css start:app",
- "build:app": "react-scripts build",
- "build": "npm-run-all build:css build:app",

run `npm run start:app` to start the app. 


## Misc
Redux was used for state management to ensure pure functional component. In some component, the component state are used to handle form submission.


