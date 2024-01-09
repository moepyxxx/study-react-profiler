import { FC } from "react";

type Props = {
  box: string[];
  selected: string | null;
  onChangeSelected: (selected: string) => void;
};
export const Page1: FC<Props> = ({ box, selected, onChangeSelected }) => {
  const processedBox = box.map((item, index) => `p_box_${index}`);
  return (
    <>
      <h2>page1 component only</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "600px",
          flexDirection: "row",
        }}>
        {processedBox.map((item, index) => (
          <div
            onClick={() => onChangeSelected(item)}
            style={{
              width: "calc(20% - 30px)",
              margin: "5px",
              padding: "20px 5px",
              border: "1px solid black",
              backgroundColor: item === selected ? "red" : "white",
            }}
            key={index}>
            {item}
          </div>
        ))}
      </div>
    </>
  );
};
