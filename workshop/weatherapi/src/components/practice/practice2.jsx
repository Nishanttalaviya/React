//2. create a to do list with the help of the usestae.allow user to 
//remove compele task using task number.(usestate-->array)2 textbox,first textbox
//will allow  user to add task , second textbox will allow user to remove user to remove 
//compaleted task using task number.2.button will be shown one for add and one for remove.
import React, { useState, useCallback } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [removeTaskNumber, setRemoveTaskNumber] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = useCallback(() => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  }, [task, tasks]);

  const handleRemoveTask = useCallback(() => {
    const taskIndex = parseInt(removeTaskNumber, 10) - 1;
    if (taskIndex >= 0 && taskIndex < tasks.length) {
      setTasks(tasks.filter((_, index) => index !== taskIndex));
      setRemoveTaskNumber("");
    }
  }, [removeTaskNumber, tasks]);

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>

      {/* Add Task Section */}
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter task"
        />
        <button
          onClick={handleAddTask}
          className="mt-2 w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Add Task
        </button>
      </div>

      {/* Remove Task Section */}
      <div className="mb-4">
        <input
          type="text"
          value={removeTaskNumber}
          onChange={(e) => setRemoveTaskNumber(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleRemoveTask()}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-red-500"
          placeholder="Enter task number to remove"
        />
        <button
          onClick={handleRemoveTask}
          className="mt-2 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Remove Task
        </button>
      </div>

      {/* Display Task List */}
      {tasks.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Task List:</h3>
          <ul className="list-decimal pl-5">
            {tasks.map((task, index) => (
              <li key={index} className="text-gray-700">
                {index + 1}. {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
