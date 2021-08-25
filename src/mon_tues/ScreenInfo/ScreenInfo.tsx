import React, {ReactElement, useEffect, useState} from "react";
import cls from "./ScreenInfo.module.css";
import BtnWrap from "../BtnWrap/BtnWrap";

import Btn from "../BtnWrap/Btn/Btn";

type Props = {
  startScore: number;
  maxScore: number;
  savedSettings: boolean;
  error: boolean
};

export default function ScreenInfo(
  {
    startScore,
    maxScore,
    savedSettings,
    error
  }: Props): ReactElement {
  console.log("render ScreenInfo")
  const [score, setScore] = useState(startScore);

  useEffect(() => {
    setScore(startScore)
  }, [startScore])

  const incHandler = () => {
    setScore(score + 1);
  };

  const resetHandler = () => {
    setScore(startScore);
  };

  let disabledButton = error || !savedSettings

  let score_style = [cls.info__score]
  let scoreText = ""


  if (error) {
    score_style.push(cls.errorScore)
    scoreText = "Incorrect value"
  } else if (!savedSettings) {
    score_style.push(cls.noSavedSettings)
    scoreText = "enter value and press 'set'"
  } else {
    score_style.push(cls.infoScore)
    score === maxScore && score_style.push(cls.score_limit)
    scoreText = score.toString();
  }

  return (

    <div className={cls.wrapper}>
      <div className={cls.info}>
        <div className={score_style.join(" ")}>
          {scoreText}
        </div>
      </div>
      <div className={cls.btn__wrap}>
        <Btn onClick={incHandler} text={"inc"}
             disabled={disabledButton || score === maxScore}/>
        <Btn onClick={resetHandler} text={"reset"}
             disabled={disabledButton || score === 0}/>
      </div>
    </div>

  );
}
