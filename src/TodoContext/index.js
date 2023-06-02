import React, {useEffect} from 'react';
import {useLocalStorage} from '../customHooks/useLocalStorage';
import moment from 'moment';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [logMessage, setLogMessage] = React.useState('');
  const [editTodo, setEditTodo] = React.useState('');
  const [timeoutMessage, setTimeoutMessage] = React.useState();
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    if ((loading === false)) {
      let deleted = 0;
      let updated = 0;
      const newTodos = todos.map((todo) => {
        const date = moment(todo.date);
        const days = moment().diff(date, 'days');
        if (days > 0) {
          if (todo.completed && !todo.pinned) {
            deleted++;
            return null;
          }
          if (todo.pinned && todo.completed) {
            todo.completed = false;
            todo.date = new Date().toLocaleString();
            updated++;
            return todo;
          }
        }
        return todo;
      }).filter((todo) => todo !== null);;
      setTodos(newTodos);
      newMessage(`Se han actualizado: ${updated} y eliminado: ${deleted} TODOS`);
    }
    // eslint-disable-next-line
  }, [loading]);

  const sortedPinnedTodos = [...todos].sort((a, b) => {
    if (a.pinned && !b.pinned) {
      return -1;
    } else if (!a.pinned && b.pinned) {
      return 1;
    } else {
      return 0;
    }
  });
  const sortedComplitedTodos = [...sortedPinnedTodos].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else if (!a.completed && b.completed) {
      return -1;
    } else {
      return 0;
    }
  });
  const todosFilters = sortedComplitedTodos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });
  const complateTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        if (!todo.completed) {
          newMessage(`Has completado el TODO: ${text} !Felicidades!`);
        } else {
          newMessage(`Parece que olvidaste algo en TODO: ${text}`);
        }
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const pinTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        if (todo.pinned) {
          newMessage(`Has desanclado el TODO: ${text}`);
        } else {
          newMessage(`Has anclado el TODO: ${text}`);
        }
        todo.pinned = !todo.pinned;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
    newMessage(`Has eliminado el TODO: ${text}`);
  };
  const addTodo = (obj) => {
    const newTodos = [...todos, obj];
    newMessage(`Has agregado el TODO: ${obj.text}`);
    setTodos(newTodos);
  };
  const updateTodo = (antText, text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === antText) {
        newMessage(`Has actualizado el TODO: ${text}`);
        todo.text = text;
        todo.completed = false;
        todo.pinned = false;
        todo.date = new Date().toLocaleString();
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const newMessage = (text) => {
    clearTimeout(timeoutMessage);
    setLogMessage(text);
    const timeOut = setTimeout(() => {
      setLogMessage('');
    }, 3000);
    setTimeoutMessage(timeOut);
  };

  return (
    <TodoContext.Provider
      value={{
        editTodo,
        setEditTodo,
        updateTodo,
        logMessage,
        pinTodo,
        addTodo,
        openModal,
        setOpenModal,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        todosFilters,
        complateTodo,
        deleteTodo,
      }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};

//[{"text":"test","date":"6/1/2023, 11:06:03 AM","pinned":false,"completed":false}]
