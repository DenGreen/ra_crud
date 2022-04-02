import React from "react";

function Btn (props) {

    return(
        <span className="crud__btn" style={props} onClick={props.callback}></span>
    )
}

export default Btn;