import React from "react";

function NewTaskForm({ listOfCategories, category, details }) {
  const filteredList = listOfCategories.filter((list) => list !== "All");
  console.log(filteredList);
  function addTask(e) {
    e.preventDefault();

    // let updatedTodo = [...todos, newTodo];
    // setTodos(updatedTodo);
    // console.log("createTodo", newTodo);
  }
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {filteredList.map((categorie) => (
            <option value={category}>{categorie}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
