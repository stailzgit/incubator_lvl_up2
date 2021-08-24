import React, {ChangeEvent, ChangeEventHandler, ReactElement} from "react"
import cls from "./MyInput.module.css";

type MyInputProps = {
  value: number
  setValue: (value: number) => void
  error: boolean
};

export default function MyInputProps({value, setValue, error}: MyInputProps): ReactElement {
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value)
  };

  const endStyle = error ? cls.InputError : cls.Input;

  return <input
    value={value}
    onChange={changeValueHandler}
    type="number"
    className={endStyle}
  />
}
