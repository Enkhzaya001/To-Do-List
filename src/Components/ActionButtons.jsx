import style from "../styles/Home.module.css";
import { Button } from "./Button";

export const ActionButtons = ({ setSelectedTab, selectedTab }) => {
  const buttons = ["All", "Active", "Complete"];
  return (
    <div className={style.tab}>
      {buttons.map((text, index) => {
        const changeBtnColor = () => {
          setSelectedTab(text);
        };

        return (
          <Button
            key={index}
            text={text}
            backgroundColor={text === selectedTab ? "#3c82f6" : "silver"}
            click={changeBtnColor}
          />
        );
      })}
    </div>
  );
};
