import { FC, useMemo, useState } from "react";
import { BoxChild } from "./BoxChild";

export const Box: FC = () => {
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
