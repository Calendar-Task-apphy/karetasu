// TaskManager.js
import React, { useState } from 'react';

const TaskManager = ({ selectedDate }) => {
  const [tasks, setTasks] = useState([]);  // タスクの状態

  const handleAddTask = (newTask) => {
    if (tasks.length < 6) {  // 要件1: 6個までタスクを登録可能
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const handleToggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>{selectedDate}のタスクリスト</h2>  {/* 選択された日付に対応したTo-Doリストのタイトル */}
      
      {/* タスク入力フォーム */}
      <input 
        type="text" 
        placeholder="タスクを入力"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value !== '') {
            handleAddTask(e.target.value);  // タスク追加
            e.target.value = '';  // 入力フォームをクリア
          }
        }}
      />

      {/* タスクの表示 */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleToggleTaskCompletion(index)} 
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>

      {/* 6個以上タスクを追加できない場合の警告 */}
      {tasks.length >= 6 && <p>タスクは6個までしか追加できません。</p>}
    </div>
  );
};

export default TaskManager;

