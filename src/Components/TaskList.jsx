import style from "../styles/Home.module.css";
import { Task } from "../Components/Task";
import { Button } from "./Button";

export const TaskList = ({ setBugd, bugd }) => {
  console.log(bugd);
  if (bugd.length === 0)
    return <p className={style.add}>No tasks yet.Add one above!</p>;
  // console.log(bugd);

  return (
    <div>
      {bugd.map((el, index) => {
        return (
          <Task
            bugd={bugd}
            setBugd={setBugd}
            key={index}
            taskName={el.taskName}
            id={el.id}
            checked={el.taskChecked}
          />
        );
      })}
    </div>
  );
};

export const CompletedTask = ({ bugd, setBugd }) => {
  const clearCompletedTask = () => {
    if (
      confirm("Are you sure you want to clear all completed tasks?") === true
    ) {
      setBugd((prev) => prev.filter((el) => !el.taskChecked));
    }
  };
  if (bugd.length === 0) {
    return;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "gray",
        marginTop: 15,
      }}
    >
      <p>
        {bugd.filter((el) => el.taskChecked).length} of {bugd.length} tasks
        completed
      </p>
      <Button
        color="red"
        text="Clear Completed task"
        click={clearCompletedTask}
      />
    </div>
  );
};
