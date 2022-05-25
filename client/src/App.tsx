import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ChatPage } from './components/ChatPage';
import { Homepage } from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/chats' element={<ChatPage />} />
      <Route path='*' element={<Navigate to={'/'} replace />} />
      </Routes>
    </div>
  );
}

export default App;
