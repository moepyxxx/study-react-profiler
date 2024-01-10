import { FC, memo, useMemo, useState } from "react";

export const Page3: FC = () => {
  return (
    <>
      <h2>page3 memo</h2>
      <Form />
      <Box />
    </>
  );
};

const Form: FC = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const handleSubmit = () => {
    alert(`inputText is ${inputText}`);
  };

  return (
    <div
      style={{
        padding: "20px 0",
      }}>
      <p>input!</p>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

const Box: FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const processedBox = useMemo(() => {
    return Array.from(new Array(10_000), (_, i) => `box${i}`).map(
      (_, index) => {
        const added = Array.from(new Array(index), (_, i) => i).reduce(
          (prev, current) => prev + current,
          0
        );
        return `p_box_${index}_${added}`;
      }
    );
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "600px",
        flexDirection: "row",
      }}>
      {processedBox.map((item, index) => (
        <BoxChild
          index={index}
          item={item}
          isSelected={index === selected}
          onChangeSelected={setSelected}
          key={index}
        />
      ))}
    </div>
  );
};

type BoxChildProps = {
  item: string;
  index: number;
  isSelected: boolean;
  onChangeSelected: (index: number) => void;
};
const BoxChild: FC<BoxChildProps> = memo(
  ({ index, isSelected, onChangeSelected, item }) => {
    console.log("keisan 3!");
    const added = Array.from(new Array(index), (_, i) => i).reduce(
      (prev, current) => prev + current,
      0
    );
    return (
      <div
        onClick={() => onChangeSelected(index)}
        style={{
          width: "calc(20% - 30px)",
          margin: "5px",
          padding: "20px 5px",
          border: "1px solid black",
          backgroundColor: isSelected ? "red" : "white",
        }}>
        {item}_{added}
      </div>
    );
  }
);
