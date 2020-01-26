import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid whitesmoke",
        margin: "5px 20px",
        borderRadius: "5px",
        height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
