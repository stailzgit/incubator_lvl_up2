import React, {ReactElement, useEffect, useMemo, useState} from "react";
import cls from "./Incrementor.module.css";
import ScreenInfo from "./ScreenInfo/ScreenInfo";
import BtnWrap from "./BtnWrap/BtnWrap";
import PanelSettings from "./PanelSettings/PanelSettings";
import {useIsMount} from './useIsMount';

type Props = {};

export default function Incrementor({}: Props): ReactElement {

  const [startScore, setStartScore] = useState(0);
  const [maxScore, setMaxScore] = useState(5)
  const [savedSettings, setSavedSettings] = useState(true)

  console.log("render Incrementor")
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      console.log('First Render');
    } else {
      setSavedSettings(false)
    }
  }, [startScore, maxScore])

  const setSettings = () => {
    setSavedSettings(true)
  }
  // const noSaveSettings = () => {
  //   savedSettings && setSavedSettings(false)
  // }
  // const yesSaveSettings = () => {
  //   setSavedSettings(true)
  // }

  return (
    <div className={cls.wrapIncrementor}>

      <PanelSettings
        setMaxScore={setMaxScore}
        setStartScore={setStartScore}
        startScore={startScore}
        maxScore={maxScore}
        setSettings={setSettings}
      />

      <ScreenInfo
        startScore={startScore}
        maxScore={maxScore}
        savedSettings={savedSettings}
      />
    </div>
  );
}
