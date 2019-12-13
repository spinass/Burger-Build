import React from "react";

import "./Bacdrop.css";

const bacdrop = props =>
  props.show ? <div className="Bacdrop" onClick={props.clicked}></div> : null;

export default bacdrop;
