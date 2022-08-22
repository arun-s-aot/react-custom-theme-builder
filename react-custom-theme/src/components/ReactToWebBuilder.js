import React from "react";
import * as ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";

import CustomButton from './Button'
const TestWebComponent = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button type="button" class="btn btn-primary">
        Primary Button
      </button>

      <CustomButton class="btn btn-primary">Submit</CustomButton>
    </div>
  );
};

TestWebComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

const WebTestWebComponent = reactToWebComponent(TestWebComponent, React, ReactDOM);
customElements.define("test-web-component", WebTestWebComponent);

export default TestWebComponent;
