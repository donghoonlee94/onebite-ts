import { ReactElement, useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {
  children?: ReactElement;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChange} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
