import { FC, useState } from "react";

export const Page1: FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const handleSubmit = () => {
    alert(`inputText is ${inputText}`);
  };

  const processedBox = Array.from(new Array(10_000), (_, i) => `box${i}`).map(
    (_, index) => {
      const added = Array.from(new Array(index), (_, i) => i).reduce(
        (prev, current) => prev + current,
        0
      );
      return `p_box_${index}_${added}`;
    }
  );
  return (
    <>
      <h2>page1 component only</h2>
      <Form
        inputText={inputText}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Box
        processedBox={processedBox}
        changeSelected={setSelected}
        selected={selected}
      />
    </>
  );
};

type FormProps = {
  inputText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};
const Form: FC<FormProps> = ({ inputText, onChange, onSubmit }) => {
  return (
    <div
      style={{
        padding: "20px 0",
      }}>
      <p>input!</p>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
};

type BoxProps = {
  processedBox: string[];
  changeSelected: (index: number) => void;
  selected: number;
};
const Box: FC<BoxProps> = ({ processedBox, changeSelected, selected }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "600px",
        flexDirection: "row",
      }}>
      {processedBox.map((item, index) => {
        console.log("keisan!");
        const added = Array.from(new Array(index), (_, i) => i).reduce(
          (prev, current) => prev + current,
          0
        );
        return (
          <div
            onClick={() => changeSelected(index)}
            style={{
              width: "calc(20% - 30px)",
              margin: "5px",
              padding: "20px 5px",
              border: "1px solid black",
              backgroundColor: index === selected ? "red" : "white",
            }}
            key={index}>
            {item}_{added}
          </div>
        );
      })}
    </div>
  );
};
