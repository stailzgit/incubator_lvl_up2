import React, {ChangeEvent, ChangeEventHandler, ReactElement, useState} from "react"
import cls from "./PanelSettings.module.css";
import Btn from "../BtnWrap/Btn/Btn";
import MyInput from "./MyInput/MyInput";

type PanelSettingsType = {
  startScore: number,
  maxScore: number,
  setStartScore: (value: number) => void,
  setMaxScore: (value: number) => void,
  setSettings: () => void

};

export default function PanelSettings(
  {
    startScore,
    setStartScore,
    maxScore,
    setMaxScore,
    setSettings,


  }: PanelSettingsType): ReactElement {
  console.log("render PanelSettings")


  //const endStyle = error ? cls.InputError : cls.Input;

  return (
    <div className={cls.wrapper}>
      <div className={cls.info}>
        <div className={cls.wrapSetValue}>
          max value
          <MyInput
            setValue={setMaxScore}
            value={maxScore}
            error={false}
          />
        </div>
        <div className={cls.wrapSetValue}>
          start value
          <MyInput
            setValue={setStartScore}
            value={startScore}
            error={false}
          />
        </div>
      </div>
      <div className={cls.btn__wrap}>
        <Btn onClick={setSettings} text={"set"} disabled={false}/>
      </div>


    </div>
  )
}