import { ReactElement, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
  children?: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChange} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
