import React, {ReactElement, useEffect, useMemo, useState} from "react";
import cls from "./Incrementor.module.css";
import ScreenInfo from "./ScreenInfo/ScreenInfo";
import BtnWrap from "./BtnWrap/BtnWrap";
import PanelSettings from "./PanelSettings/PanelSettings";
import {useIsMount} from './useIsMount';
import {restoreState, saveState, StateType} from "../localStorage";

type Props = {};

export default function Incrementor({}: Props): ReactElement {


  const [score, setScore] = useState(0);
  const [startScore, setStartScore] = useState(0);
  const [maxScore, setMaxScore] = useState(5)

  const [savedSettings, setSavedSettings] = useState(true)
  const [errorStart, setErrorStart] = useState(false)
  const [errorMax, setErrorMax] = useState(false)

  console.log("render Incrementor")
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      console.log('First Render');
      const startState = restoreState<StateType>("incrementor",
        {maxScore: maxScore, startScore: startScore, score: score})
      setScore(startState.score)
      setStartScore(startState.startScore)
      setMaxScore(startState.maxScore)
      //setSavedSettings(true)
      return;
    }

    setSavedSettings(false)

    if (startScore >= maxScore) {
      setErrorStart(true)
      setErrorMax(true)
    } else if (startScore < 0) {
      setErrorStart(true)
    } else {
      setErrorStart(false)
      setErrorMax(false)
    }

  }, [startScore, maxScore])

  const setSettings = () => {
    setSavedSettings(true)
    saveState<StateType>('incrementor',
      {maxScore: maxScore, startScore: startScore, score: score})
  }

  return (
    <div className={cls.wrapIncrementor}>

      <PanelSettings
        setMaxScore={setMaxScore}
        setStartScore={setStartScore}
        startScore={startScore}
        maxScore={maxScore}
        setSettings={setSettings}
        savedSettings={savedSettings}
        errorStart={errorStart}
        errorMax={errorMax}
      />

      <ScreenInfo
        score={score}
        setScore={setScore}
        startScore={startScore}
        maxScore={maxScore}
        savedSettings={savedSettings}
        error={errorStart || errorMax}
      />
    </div>
  );
}
