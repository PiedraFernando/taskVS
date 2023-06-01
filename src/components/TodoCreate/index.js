import { useContext } from 'react';
import './TodoCreate.css';
import { TodoContext } from '../../TodoContext';
function TodoCreate() {
  const {setOpenModal} = useContext(TodoContext)
  return (
    <button
      onClick={() => {
        setOpenModal(state => !state)
      }}>
      +
    </button>
  );
}
export {TodoCreate};
