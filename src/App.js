import { ChildArea } from "./ChildArea";
import { InputDisp } from "./InputDisp";
import "./styles.css";
import { useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCountUP = () => setCount(count + 1);

  const onClickOpen = () => setOpen(!open);

  const onChangeText = (t) => setText(t.target.value);

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <p>入力したものを下に表示</p>
      <input value={text} onChange={onChangeText} />
      <InputDisp text={text} />
      <br />
      <button onClick={onClickCountUP}>count up!</button>
      <br />
      <p>{count}</p>
      <br />
      <button onClick={onClickOpen}>
        表示(子コンポーネントの表示非表示切り替え)
      </button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
