import { FC, useMemo } from "react";

type Props = {
  box: string[];
  selected: string | null;
  onChangeSelected: (selected: string) => void;
};
export const Page3: FC<Props> = ({ box, selected, onChangeSelected }) => {
  const processedBox = useMemo(() => {
    return box.map((item) => `p_${item}`);
  }, [box]);

  return (
    <>
      <h2>page3 memo + other component</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "600px",
          flexDirection: "row",
        }}>
        {processedBox.map((item, index) => (
          <Page3Child
            item={item}
            isSelected={item === selected}
            onChangeSelected={onChangeSelected}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

type ChildProps = {
  item: string;
  isSelected: boolean;
  onChangeSelected: (selected: string) => void;
};
const Page3Child: FC<ChildProps> = ({ isSelected, onChangeSelected, item }) => {
  return (
    <div
      onClick={() => onChangeSelected(item)}
      style={{
        width: "calc(20% - 30px)",
        margin: "5px",
        padding: "20px 5px",
        border: "1px solid black",
        backgroundColor: isSelected ? "red" : "white",
      }}>
      {item}
    </div>
  );
};
