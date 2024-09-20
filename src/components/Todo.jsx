import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "reactTodo";
const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // To check if input field is empty
    if (!content) return;

    // To check if data already exists
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );

    if (ifTodoContentMatched) return;

    const updatedTask = [...task, { id, content, checked }];
    setTask(updatedTask);

    // Add data to localStorage
    localStorage.setItem(todoKey, JSON.stringify(updatedTask));
  };

  const handleOnDelete = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
    localStorage.setItem(todoKey, JSON.stringify(updatedTask)); // Update localStorage on delete
  };

  const handleOnChecked = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
    localStorage.setItem(todoKey, JSON.stringify(updatedTask)); // Update localStorage on toggle check
  };

  const handleClearAll = () => {
    setTask([]); // Clear the task state
    localStorage.removeItem(todoKey); // Remove the tasks from localStorage
  };

  return (
    <section className="flex flex-col items-center justify-center w-full py-10 todo-container">
      <header className="flex flex-col items-center justify-center">
        <h1 className="mb-3 text-4xl font-semibold text-white">Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="mt-5">
        <ul>
          {task.map((currTask) => (
            <TodoList
              key={currTask.id}
              data={currTask.content}
              onHandleDeleteTodo={handleOnDelete}
              checked={currTask.checked}
              onHandleCheckedTodo={() => handleOnChecked(currTask.content)}
            />
          ))}
        </ul>
      </section>
      <button
        onClick={handleClearAll}
        className="p-3 mt-5 font-semibold bg-red-800 rounded-md"
      >
        Clear All
      </button>
    </section>
  );
};

export default Todo;
