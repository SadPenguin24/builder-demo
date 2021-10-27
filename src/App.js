import React from "react";
import ReactJsonSchemaFormBuilder, {
  ReactJsonSchemaFormPreview,
  ReactJsonSchemaFormExport,
} from "react-jsonschema-form-builder";
// import ImportScript from "react-import-script";
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
        {/* <ImportScript url="https://code.jquery.com/jquery-3.2.1.slim.min.js">
          <ImportScript url="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <ImportScript url="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"> */}
        <h1>ReactJsonSchemaFormBuilders</h1>
        <ReactJsonSchemaFormBuilder
          schema={this.state.schema}
          uiSchema={this.state.uiSchema}
          onFormChange={this.handleFormChange}
        />
        {/* </ImportScript>
          </ImportScript>
        </ImportScript> */}

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
