import { memo } from "react";

const style = {
  width: "100",
  higth: "200",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  console.log("【ChildArea】レンダリングされた");
  // 負荷をかける
  // [...Array(2000).keys()] と書くことで 2000件のデータを用意している
  const datas = [...Array(2000).keys()];
  // console.log(datas);
  datas.forEach(() => {
    console.log(".... 適当な文字 ....");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
