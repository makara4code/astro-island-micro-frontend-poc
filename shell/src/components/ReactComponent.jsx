import React from "react";
import MicroFrontendReact1 from "http://localhost:7100/bundle.js";
import MicroFrontendReact2 from "http://localhost:7200/bundle.js";

const ReactComponent = () => (
  <>
    <MicroFrontendReact1 />
    <MicroFrontendReact2 />
  </>
);

export default ReactComponent;
