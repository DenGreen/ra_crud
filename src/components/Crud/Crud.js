import React, { useState } from "react";
import Btn from "./Btn/Btn";
import Card from "./Card/Card";
import api from "../../Api/Api";
import "./main.css";

function Crud() {
  let [arrNotes, setArrNotes] = useState([]);

  const arrow = async (e) => {
    setArrNotes(await api.card.getNotes());
  };

  const arrowPost = async (e) => {
    const textArea = document.querySelector(".crud__textarea");
    await api.card.addNotes({ content: textArea.value });
    setArrNotes(await api.card.getNotes());
  };

  const cross = async (e) => {
    const idElement = e.target.parentElement.id;
    await api.card.deleteNotes(idElement);
    setArrNotes(await api.card.getNotes());
  };

  return (
    <div className="crud">
      <div className="crud__title">
        <span>Notes</span>
        <Btn backgroundImage={"url(./img/arrow.png)"} callback={arrow} />
      </div>

      <div className="crud__card-box">
        {arrNotes.length === 0 ? (
          <div>Записей нет</div>
        ) : (
          <Card arrNotes={arrNotes} callback={cross} />
        )}
      </div>

      <div className="crud__textarea-box">
        <textarea className="crud__textarea" />
        <Btn
          backgroundImage={"url(./img/arrow_post.png)"}
          callback={arrowPost}
        />
      </div>
    </div>
  );
}

export default Crud;
