import React, {ReactElement, useState} from "react";
import cls from "./ScreenInfo.module.css";
import BtnWrap from "../BtnWrap/BtnWrap";
import Btn from "../BtnWrap/Btn/Btn";

type Props = {
  startScore: number;
  maxScore: number;
  savedSettings: boolean;
};

export default function ScreenInfo(
  {
    startScore,
    maxScore,
    savedSettings,
  }: Props): ReactElement {
  console.log("render ScreenInfo")

  const [score, setScore] = useState(startScore);

  const incHandler = () => {
    setScore(score + 1);
  };

  const resetHandler = () => {
    setScore(startScore);
  };

  let score_style = `${cls.info__score} ${score === maxScore && cls.score_limit}`
  return (

    <div className={cls.wrapper}>
      <div className={cls.info}>
        <div className={score_style}>{
          savedSettings
            ? score
            : <div className={cls.MsgPressSet}>enter value and press 'set'</div>
        }
        </div>
      </div>
      <div className={cls.btn__wrap}>
        <Btn onClick={incHandler} text={"inc"} disabled={score === maxScore}/>
        <Btn onClick={resetHandler} text={"reset"} disabled={score === 0}/>
      </div>
    </div>

  );
}
