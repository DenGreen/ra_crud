import React from "react";
import Btn from "../Btn/Btn";

function Card(value) {

  const cardMap = value.arrNotes.map((notes) => (
    <div className="crud__card" key={notes.id} id={notes.id}>
      <p className="crud__tetx">
        {notes.content}
      </p>
      <Btn backgroundImage={"url(./img/cross.png)"} callback={value.callback} />
    </div>
  ));
  
  return (
    <React.Fragment>
      {cardMap}
    </React.Fragment>
  );
}

export default Card;