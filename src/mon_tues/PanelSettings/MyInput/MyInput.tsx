import React, {ChangeEvent, ChangeEventHandler, ReactElement} from "react"
import cls from "./MyInput.module.css";

type MyInputProps = {
  value: number
  setValue: (value: number) => void
  error: boolean

};

export default function MyInput({value, setValue, error}: MyInputProps): ReactElement {
  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value)
  };
  const endStyle = `${cls.Input} ${error ? cls.InputError : cls.Input}`;

  return <input
    value={value}
    onChange={changeValueHandler}
    type="number"
    className={endStyle}
  />
}
