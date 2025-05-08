import style from "../styles/Home.module.css";
import { Button } from "./Button";

export const Input = ({ task, setTask, setBugd, randomId }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = () => {
    if (task === "") {
      alert("Please add task");
      return;
    }
    setBugd((prev) => [
      ...prev,
      { taskName: task, taskChecked: false, id: randomId },
    ]);
    setTask("");
  };

  return (
    <div>
      <div className={style.task}>
        <input
          style={{ width: 280, paddingInline: 10 }}
          placeholder="Add a new task"
          value={task}
          onChange={handleChange}
        />
        <Button
          backgroundColor={"#3c82f6"}
          color={"white"}
          text="Add"
          click={clickHandler}
        />
      </div>
    </div>
  );
};
