import { FC, useState } from "react";

export const Form: FC = () => {
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
