import React from 'react';
import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {TodoCreate} from './components/TodoCreate';
import {TodosLoading} from './components/TodosLoading';
import {TodoContext, TodoProvider} from './TodoContext';
import {Modal} from './components/Modal';
import './App.css';
import {TodoForm} from './components/TodoForm';

function App() {
  return (
    <TodoProvider>
      <UI></UI>
    </TodoProvider>
  );
}

function UI() {
  const {loading, error, todosFilters, complateTodo, deleteTodo, openModal} = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {error && <p className="message">Upps, hubo un error</p>}
      {!loading && todosFilters.length === 0 && <p className="message">No hay TODOS</p>}
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {todosFilters.map((todo) => (
          <TodoItem
            onDelete={() => {
              deleteTodo(todo.text);
            }}
            onComplete={() => {
              complateTodo(todo.text);
            }}
            text={todo.text}
            date={todo.date}
            pinned={todo.pinned}
            completed={todo.completed}
            key={todo.text}
          />
        ))}
      </TodoList>
      <TodoCreate />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export default App;
