import React, {ChangeEvent, ChangeEventHandler, ReactElement, useState} from "react"
import cls from "./PanelSettings.module.css";
import Btn from "../BtnWrap/Btn/Btn";
import MyInput from "./MyInput/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, AppStoreType} from "../../state/store";
import {InitialStateType, saveAC, setMaxScoreAC, setStartScoreAC} from "../../state/score-reducer";

type PanelSettingsType = {
  // startScore: number,
  // maxScore: number,
  // savedSettings: boolean,
  // errorStart: boolean,
  // errorMax: boolean,
  // setStartScore: (value: number) => void,
  // setMaxScore: (value: number) => void,
  // setSettings: () => void

};

export default function PanelSettings(
  {
    // startScore,
    // setStartScore,
    // maxScore,
    // setMaxScore,
    // setSettings,
    // savedSettings,
    // errorStart,
    // errorMax

  }: PanelSettingsType): ReactElement {
    console.log("render PanelSettings")

    const dispatch = useDispatch()
    const {score, startScore, maxScore, errorStart, errorMax, isSavedSettings} = useSelector<AppRootStateType,InitialStateType>(state => state.score)
    //const {score, startScore, maxScore, errorStart, errorMax} = ...state
    //const endStyle = error ? cls.InputError : cls.Input;

    const setStartScore = (newStartScore: number) => {dispatch(setStartScoreAC(newStartScore))}
    const setMaxScore   = (newMaxScore: number) => {dispatch(setMaxScoreAC(newMaxScore))}
    const setSettings  = () => {dispatch(saveAC())}

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
