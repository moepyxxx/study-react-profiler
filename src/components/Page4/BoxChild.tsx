import { FC, memo } from "react";

type BoxChildProps = {
  item: string;
  index: number;
  isSelected: boolean;
  onChangeSelected: (index: number) => void;
};
export const BoxChild: FC<BoxChildProps> = memo(
  ({ index, isSelected, onChangeSelected, item }) => {
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
