import React, {ChangeEvent, ChangeEventHandler, ReactElement, useState} from "react"
import cls from "./PanelSettings.module.css";
import Btn from "../BtnWrap/Btn/Btn";
import MyInput from "./MyInput/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, AppStoreType} from "../../state/store";
import {
    //initialStateTC,
    InitialStateType,
    saveAC,
    //saveTC,
    setMaxScoreAC,
    setStartScoreAC
} from "../../state/score-reducer";

type PanelSettingsType = {};

export default function PanelSettings({}: PanelSettingsType): ReactElement {
    console.log("render PanelSettings")

    const dispatch = useDispatch()
    const {startScore, maxScore, errorStart, errorMax, isSavedSettings} =
        useSelector<AppRootStateType,InitialStateType>(state => state.incrementor)

    const setStartScore = (newStartScore: number) => {dispatch(setStartScoreAC(newStartScore))}
    const setMaxScore   = (newMaxScore: number) => {dispatch(setMaxScoreAC(newMaxScore))}
    const setSettings  = () =>
        {dispatch(saveAC())} //todo: use thunk creator
        //dispatch(saveTC())

  return (
    <div className={cls.wrapper}>
      <div className={cls.info}>
        <div className={cls.wrapSetValue}>
          max value
          <MyInput
            setValue={setMaxScore}
            value={maxScore}
            error={errorMax}
          />
        </div>
        <div className={cls.wrapSetValue}>
          start value
          <MyInput
            setValue={setStartScore}
            value={startScore}
            error={errorStart}
          />
        </div>
      </div>
      <div className={cls.btn__wrap}>
        <Btn
          onClick={setSettings}
          text={"set"}
          disabled={isSavedSettings || errorStart || errorMax}
        />
      </div>


    </div>
  )
}
