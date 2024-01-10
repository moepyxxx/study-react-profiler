import { FC } from "react";

type BoxProps = {
  processedBox: string[];
  changeSelected: (index: number) => void;
  selected: number;
};
export const Box: FC<BoxProps> = ({
  processedBox,
  changeSelected,
  selected,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "600px",
        flexDirection: "row",
      }}>
      {processedBox.map((item, index) => {
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
