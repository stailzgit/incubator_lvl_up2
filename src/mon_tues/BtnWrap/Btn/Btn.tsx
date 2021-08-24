import React, { ReactElement } from "react";
import cls from "./Btn.module.css";

type Props = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

export default function Btn({ text, onClick, disabled }: Props): ReactElement {
  return (
    <button onClick={onClick} className={cls.btn} disabled={disabled}>
      {text}
    </button>
  );
}
