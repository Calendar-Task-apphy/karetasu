import React, { useState } from 'react';
import TaskManager from './components/TaskManager';
import Calendar from './components/Calendar';
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);  // 選択された日付を管理

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* カレンダーコンポーネントに日付選択のための関数を渡す */}
        <Calendar setSelectedDate={setSelectedDate} />

        {/* 選択された日付がある場合にTaskManagerを表示 */}
        {selectedDate && (
          <TaskManager selectedDate={selectedDate&& selectedDate.toLocaleDateString()} />
        )}

      </header>
    </div>
  );
}

export default App;
