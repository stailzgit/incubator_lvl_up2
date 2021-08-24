import React, {ChangeEvent, ChangeEventHandler, ReactElement, useState} from "react"
import cls from "./MyInput.module.css";

type PanelSetValueType = {
  setScore: (value: number) => void
};

export default function PanelSetValue(
  {setScore}: PanelSetValueType): ReactElement {
  const [startValue, setStartValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1);


  //const endStyle = error ? cls.InputError : cls.Input;

  return <input

  />
}
