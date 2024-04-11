import { useState } from 'react';
import Container from './container';

function TodoContainer() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleTodos(event) {
    event.preventDefault();

    setTodos((prevTodo) => {
      const id = prevTodo.length + 1;
      return [
        ...prevTodo,
        {
          id: id,
          description: input,
          completed: false,
        },
      ];
    });
    setInput('');
  }

  return (
    <div className="main-container">
      <h1>Things to be done</h1>
      <form onSubmit={handleTodos}>
        <input
          type="text"
          placeholder="Write things to do...."
          value={input}
          onChange={handleChange}
          required
        />
        <button type="submit">Add things</button>
      </form>
      <Container todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoContainer;
