# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Implementation

Clone this repository
Execute a yarn install if you haven't already
Execute a yarn build and yarn pack

IMPORTANT
This builder does not work on react 17^. You should check your package.json and if react is on version 17 you should downgrade it prefferably version 16.14.0
Sample Downgrade inside the package.json dependencies

```
    "react": "^16.14.0",
    "react-dom": "^16.14.0",
```

Note that you can do Import A that is discussed below together with the downgrade

Delete node_modules if there is any and do a yarn install in the terminal

2 ways to import the builder
Note that filename and/or version may changed just remember to import the newly created .tgz

A. Add the created .tgz file into your own react app's package.json and do a yarn install
Sample if the .tgz is inside the your own app

```
    "react-jsonschema-form-builder": "./react-jsonschema-form-builder-v1.0.2.tgz",
```

B. Execute this in your terminal
`yarn add //directory of the .tgz`
sample if the .tgz is inside the your own app
`yarn add ./react-jsonschema-form-builder-v1.0.2.tgz`

Very Important to include bootstrap and jquery in your index.html file
Sample directory `public/index.html`

Include these lines
Inside your `head` tag

```
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
```

Inside your `script` tag right after the `body` tag

```
  <script
    src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"
  ></script>
```

Moving on to the react app itself

index.js (Usual location `src/index.js`)

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import demoSchema from "./demoSchema-empty.json";

ReactDOM.render(
  <React.StrictMode>
    <App
      form={{
        schema: demoSchema.schema,
        uiSchema: demoSchema.uiSchema,
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Most important to note here is the import of demoSchema and the implementation of the form props

App.js (Usual location `src/App.js`)
Install and import Lodash and the desired component from react-jsonschema-form-builder example

```
import ReactJsonSchemaFormBuilder, {
  ReactJsonSchemaFormPreview,
  ReactJsonSchemaFormExport,
} from "react-jsonschema-form-builder";
import _ from "lodash";
```

Then a constructor to initialize the props and states

```
constructor(props) {
    super(props);
    this.state = {
      form: props.form,
      title: "Untitled Form",
      form_id: props.form?.id || null,
      schema: props.form?.schema || {
        type: "object",
        required: [],
        properties: {},
      },
      uiSchema: props.form?.uiSchema || {
        "ui:field": "layout_grid",
        "ui:layout_grid": {
          "ui:row": [{ "ui:col": { md: 12, children: [] } }],
        },
      },
    };
  }
```

The schema, uiSchema, and other props will come from the demoSchema that was imported on index.js

You also need to make this function

```
handleFormChange = (schema, uiSchema) => {
    this.setState({
      schema: _.cloneDeep(schema),
      uiSchema: _.cloneDeep(uiSchema),
    });
  };
```

To use the component just import them with these props
Pass the schema and uiSchema props with the exception of ReactJsonSchemaFormBuilder that requires to pass onFormChange with the function that we created earlier

```
<ReactJsonSchemaFormBuilder
    schema={this.state.schema}
    uiSchema={this.state.uiSchema}
    onFormChange={this.handleFormChange}
/>
```

```
<ReactJsonSchemaFormPreview
    schema={this.state.schema}
    uiSchema={this.state.uiSchema}
/>
```

```
<ReactJsonSchemaFormExport
    schema={this.state.schema
    uiSchema={this.state.uiSchema}
/>
```

Sample Implementation on App.js

```
import React from "react";
import ReactJsonSchemaFormBuilder, {
  ReactJsonSchemaFormPreview,
  ReactJsonSchemaFormExport,
} from "react-jsonschema-form-builder";
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: props.form,
      title: "Untitled Form",
      form_id: props.form?.id || null,
      schema: props.form?.schema || {
        type: "object",
        required: [],
        properties: {},
      },
      uiSchema: props.form?.uiSchema || {
        "ui:field": "layout_grid",
        "ui:layout_grid": {
          "ui:row": [{ "ui:col": { md: 12, children: [] } }],
        },
      },
    };
  }
  handleFormChange = (schema, uiSchema) => {
    this.setState({
      schema: _.cloneDeep(schema),
      uiSchema: _.cloneDeep(uiSchema),
    });
  };
  render() {
    return (
      <div className="App">
        <h1>ReactJsonSchemaFormBuilders</h1>
        <ReactJsonSchemaFormBuilder
          schema={this.state.schema}
          uiSchema={this.state.uiSchema}
          onFormChange={this.handleFormChange}
        />

        <h1>ReactJsonSchemaFormPreview</h1>
        <ReactJsonSchemaFormPreview
          schema={this.state.schema}
          uiSchema={this.state.uiSchema}
        />

        <h1>ReactJsonSchemaFormExport</h1>
        <ReactJsonSchemaFormExport
          schema={this.state.schema}
          uiSchema={this.state.uiSchema}
        />
      </div>
    );
  }
}

export default App;
```
