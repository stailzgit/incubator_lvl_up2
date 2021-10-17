import React, {ReactElement, useEffect, useState} from "react";
import cls from "./ScreenInfo.module.css";
//import BtnWrap from "../BtnWrap/BtnWrap";

import Btn from "../BtnWrap/Btn/Btn";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {InitialStateType, setScoreAC} from "../../state/score-reducer";

type Props = {
  // score: number,
  // setScore: (newScore: number) => void,
  // startScore: number;
  // maxScore: number;
  // savedSettings: boolean;
  // error: boolean
};

export default function ScreenInfo(
  {
    // score,
    // setScore,
    // startScore,
    // maxScore,
    // savedSettings,
    // error
  }: Props): ReactElement {
  console.log("render ScreenInfo")
  // const [score, setScore] = useState(startScore);

    const dispatch = useDispatch()
    const {score, startScore, maxScore, errorStart, errorMax, isSavedSettings} =
        useSelector<AppRootStateType,InitialStateType>(state => state.score)


  useEffect(() => {
    dispatch(setScoreAC(startScore))
  }, [startScore])

  const incHandler = () => {
      dispatch(setScoreAC(score + 1))
  };

  const resetHandler = () => {
      dispatch(setScoreAC(startScore))
  };

  let disabledButton = errorStart || errorMax || !isSavedSettings

  let score_style = [cls.info__score]
  let scoreText = ""

  if (errorStart || errorMax) {
    score_style.push(cls.errorScore)
    scoreText = "Incorrect value"
  } else if (!isSavedSettings) {
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
             //disabled={disabledButton}/>
             disabled={disabledButton || score === maxScore}/>
        <Btn onClick={resetHandler} text={"reset"}
             // disabled={disabledButton}/>
             disabled={disabledButton || score === 0}/>
      </div>
    </div>

  );
}
