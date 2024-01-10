import { FC, useRef } from "react";

export const Form: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(`inputText is ${inputRef.current}`);
  };

  return (
    <div
      style={{
        padding: "20px 0",
      }}>
      <p>input!</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
