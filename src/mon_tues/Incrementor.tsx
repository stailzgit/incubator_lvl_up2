import React, {ReactElement, useEffect, useMemo, useState} from "react";
import cls from "./Incrementor.module.css";
import ScreenInfo from "./ScreenInfo/ScreenInfo";
//import BtnWrap from "./BtnWrap/BtnWrap";
import PanelSettings from "./PanelSettings/PanelSettings";
import {useIsMount} from './useIsMount';
import {restoreState, saveState, StateType} from "../localStorage";
import {useDispatch} from "react-redux";

type Props = {};

export default function Incrementor({}: Props): ReactElement {

  console.log("render Incrementor")
  //const isMount = useIsMount();

  return (
    <div className={cls.wrapIncrementor}>
      <PanelSettings/>
      <ScreenInfo />
    </div>
  );
}
