import React,{useState} from "react";

function Task({text,category,onUpdateList,task,tasks}) {
  


  function deleteTask(id) {
    console.log(id);
    const newArray = tasks.filter((task) => task.id !== id);
    console.log(newArray);
    onUpdateList(newArray)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTask(task.text)}>X</button>
    </div>
  );
}

export default Task;
