import style from "../styles/Home.module.css";

export const Button = ({ backgroundColor, color, click, text }) => {
  // console.log(backgroundColor);
  // console.log(text);
  return (
    <button
      className={style.addButton}
      onClick={click}
      style={{
        color,
        backgroundColor,
      }}
    >
      {text}
    </button>
  );
};
