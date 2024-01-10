import { FC, useState } from "react";
import { Form } from "./Form";
import { Box } from "./Box";

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
