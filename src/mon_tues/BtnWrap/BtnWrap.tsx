import React, { ReactElement } from "react";
import Btn from "./Btn/Btn";
import cls from "./BtnWrap.module.css";

type Props = {
  score: number;
  setScore: (score: number) => void;
};

// export default function BtnWrap({ score, setScore }: Props): ReactElement {
//   const incHandler = () => {
//     setScore(score + 1);
//   };
//
//   const resetHandler = () => {
//     setScore(0);
//   };
//   return (
//     <div className={cls.btn__wrap}>
//       <Btn onClick={incHandler} text={"inc"} disabled={score === 5} />
//       <Btn onClick={resetHandler} text={"reset"} disabled={score === 0} />
//     </div>
//   );
// }
