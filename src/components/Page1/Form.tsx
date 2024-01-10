import { FC } from "react";

type FormProps = {
  inputText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

export const Form: FC<FormProps> = ({ inputText, onChange, onSubmit }) => {
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
