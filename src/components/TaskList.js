import React from "react";
import Task from "./Task";
function TaskList({ tasks, onUpdateList }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          tasks={tasks}
          task={task}
          onUpdateList={onUpdateList}
        />
      ))}
    </div>
  );
}

export default TaskList;
