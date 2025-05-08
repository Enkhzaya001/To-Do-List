import { Button } from "./Button";

export const Task = ({ taskName, id, setBugd, bugd, checked }) => {
  const handleDone = (id) => {
    // console.log(id);
    setBugd((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return { ...el, taskChecked: !el.taskChecked };
        } else {
          return el;
        }
      });
    });
  };
  const deleteBtn = () => {
    if (confirm(`Are you sure to delete ${taskName} task? `) === true) {
      setBugd((prev) => {
        return prev.filter((el) => {
          if (el.id !== id) {
            return true;
          }
        });
      });
    } else bugd;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightgray",
        padding: 4,
        borderRadius: 4,
        marginTop: 10,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", height: 30, gap: 5 }}
      >
        <input
          type="checkbox"
          name=""
          checked={checked}
          onClick={() => handleDone(id)}
        />
        <p
          style={{
            fontSize: 18,
            textDecoration: checked ? "line-through" : "none",
          }}
        >
          {taskName}
        </p>
      </div>
      <Button text="Delete" color={"red"} click={deleteBtn} />
    </div>
  );
};
