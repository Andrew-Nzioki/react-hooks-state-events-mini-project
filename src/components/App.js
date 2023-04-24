import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState("");
  const [category,setcategory]=useState('')
  const [details,setDetails]=useState('')
  const [addStyle, setAddStyle] = useState("");

  function applyStyle(categoryValue) {
    console.log(categoryValue);
    if (categoryValue === CATEGORIES) {
      setAddStyle("selected");
    }
  }
  function updateTasks(newArray) {
    console.log(newArray);
    setTask(newArray);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        listCategoris={CATEGORIES}
        applyStyle={applyStyle}
        addStyle={addStyle}
      />
      <NewTaskForm
        listOfCategories={CATEGORIES}
        category={category}
        details={details}
      />
      <TaskList tasks={TASKS} onUpdateList={updateTasks} />
    </div>
  );
}

export default App;
