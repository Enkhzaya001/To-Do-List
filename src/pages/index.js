import style from "../styles/Home.module.css";
import { Input } from "../Components/Input";
import { TaskList, CompletedTask } from "../Components/TaskList";
import { ActionButtons } from "@/Components/ActionButtons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const Home = () => {
  const [task, setTask] = useState("");
  const [bugd, setBugd] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  console.log(selectedTab);
  const randomId = uuidv4();

  const filterTask = () => {
    if (selectedTab === "All") return bugd;
    if (selectedTab === "Active") return bugd.filter((el) => !el.taskChecked);
    if (selectedTab === "Complete") return bugd.filter((el) => el.taskChecked);
  };
  const filteredTask = filterTask();

  return (
    <div className={style.card}>
      <div className={style.container}>
        <p style={{ fontSize: 20, fontWeight: "bold" }}>To-Do list</p>
        <Input
          task={task}
          setTask={setTask}
          setBugd={setBugd}
          randomId={randomId}
        />
        <ActionButtons
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
        <TaskList setBugd={setBugd} bugd={filteredTask} />
        <CompletedTask bugd={filteredTask} setBugd={setBugd} />
        <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
          <p className={style.add}>Powered by</p>
          <a href="https://pinebaatar.pinecone.mn/" className={style.academy}>
            Pinecone Academy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
