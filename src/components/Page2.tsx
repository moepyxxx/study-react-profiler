import { FC, useMemo } from "react";

type Props = {
  box: string[];
  selected: string | null;
  onChangeSelected: (selected: string) => void;
};
export const Page2: FC<Props> = ({ box, selected, onChangeSelected }) => {
  const processedBox = useMemo(() => {
    return box.map((item) => `p_${item}`);
  }, [box]);

  return (
    <>
      <h2>page2 memo</h2>
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
