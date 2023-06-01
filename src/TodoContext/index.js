import React from 'react';
import {useLocalStorage} from '../customHooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const todosFilters = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });
  const complateTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  };

  const addTodo = (obj) => {
    const newTodos = [...todos, obj];
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{addTodo, openModal, setOpenModal, loading, error, completedTodos, totalTodos, searchValue, setSearchValue, todosFilters, complateTodo, deleteTodo}}>
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};
