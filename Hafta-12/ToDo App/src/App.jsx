import  { useState } from 'react';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <div className="add-todo">
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Yeni ToDo girin..." 
        />
        <button onClick={addTodo}>Ekle</button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className="todo-item">
            <span 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Sil</button>
            <button onClick={() => {
              const updatedText = prompt('Güncellemek için yeni metni girin:', todo.text);
              if (updatedText) {
                updateTodo(todo.id, updatedText);
              }
            }} className="edit-btn">Güncelle</button>
          </div>
        ))}
      </div>

      <div className="filters">
        <button onClick={() => setFilter('all')}>Tüm Maddeleri Göster</button>
        <button onClick={() => setFilter('active')}>Aktif Maddeleri Göster</button>
        <button onClick={() => setFilter('completed')}>Tamamlanmış Maddeleri Göster</button>
        <button onClick={deleteCompleted}>Tamamlanmışları Sil</button>
      </div>
    </div>
  );
}

export default App;
