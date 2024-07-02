/* escribir rfce*/

import React from "react";
import "./styles.css";
import TextButtons from "../Buttons/TextButtons";

function CardGrupo4({ children }) {
  return (
    <div className="card">
      <img
        src="https://s3-alpha-sig.figma.com/img/0e5d/8279/8e2becda16e2f3abc85e162b63a8d214?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gt5szsiisVz0~52xp9Mz-DpFAmqSLZMewtf0sZ0aUDMFLcOpAeMNeL0vYyMXRYyeJro~wFVrTnG8~90bM3l5yzVZbECbDk-kzdh9NKHi0W2agbqoLzuVrfysRnQ0uPtjKPvF-mX6bBkAjCU8b2vhXQuU12GIWwB1IDwbfqtuqln2UfaVOC4hWYigKuyuMXCRTUqjZryGp05UqJO2CtqZOd2s~lCOPHSdiaDmMEDjYS450RAI-8y70RRHvUacF2zLour1i6hQYNveIUGqNaO5tqgvoybK~YI6GE2aQ4AwYTAIZ1vHVYti3d~KiVUMd6-44gjAFnDySxWULTlYPSj6jg__"
        alt=""
        className="img__card"
      />
      <h1 className="title__card">Constructive and destructive waves </h1>
      <p className="content__card">{children}</p>
      <TextButtons className="button__card">Continue</TextButtons>
    </div>
  );
}

export default CardGrupo4;
