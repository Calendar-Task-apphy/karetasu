import React, { useState } from "react";


// TaskManagerコンポーネント
const TaskManager = ({ selectedDate }) => {
  const [tasks, setTasks] = useState([]); // タスクの状態
  const [taskInput, setTaskInput] = useState(""); // 入力されたタスク

  // タスクを追加する関数
  const addTask = () => {
    if (tasks.length >= 6) {
      alert("タスクは6個までしか追加できません。");
      return;
    }

    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  // タスクを削除する関数
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // タスクの完了状態をトグルする関数
  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>タスク一覧 ({selectedDate ? selectedDate : "日付を選択してください"})</h3>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="タスクを入力してください"
      />
      <button onClick={addTask}>タスクを追加</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>

      {tasks.length >= 6 && <p>タスクは6個までしか追加できません。</p>}
    </div>
  );
};

export default TaskManager;
