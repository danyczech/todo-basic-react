import "./AllTasks.css";
import data from "../data";
import { useState } from "react";

const AllTasks = () => {
  const [myTasks, setMyTasks] = useState(data);

  const taskHandler = (key) => {
    const filteredTasks = myTasks.filter((task) => {
      return task.id !== key;
    });
    setMyTasks(filteredTasks);
  };

  const deleteAllHandler = () => {
    setMyTasks([]);
  };

  return (
    <div>
      {myTasks.map((task) => {
        const { id, name } = task;
        return (
          <div className="one-task" key={id}>
            <h4>{name}</h4>
            <button onClick={() => taskHandler(id)}>Vymazat</button>
          </div>
        );
      })}
      <button className="btn" onClick={deleteAllHandler}>
        Vymazat vše
      </button>
    </div>
  );
};

export default AllTasks;
