function Container({ todos, setTodos }) {
  function handleDone(index, done) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = done;
    setTodos(updatedTodos);
    console.log(updatedTodos);
  }
  function handleDelete(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <div>
      {todos.map((todos, i) => {
        return (
          <div key={i}>
            <ul>
              <li className="todo-items">
                {todos.completed ? (
                  <strike>{todos.description}</strike>
                ) : (
                  todos.description
                )}
                <div className="buttons">
                  <button
                    className="done"
                    onClick={() =>
                      handleDone(i, todos.completed ? false : true)
                    }
                  >
                    {!todos.completed ? 'Done' : 'Undone'}
                  </button>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Container;
