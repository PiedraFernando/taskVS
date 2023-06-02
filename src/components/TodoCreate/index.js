import { useContext } from 'react';
import './TodoCreate.css';
import { TodoContext } from '../../TodoContext';
function TodoCreate() {
  const {setOpenModal, setEditTodo} = useContext(TodoContext)
  return (
    <button
      onClick={() => {
        setEditTodo('')
        setOpenModal(state => !state)
      }}>
      +
    </button>
  );
}
export {TodoCreate};
