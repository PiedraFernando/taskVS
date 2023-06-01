import {useContext, useState} from 'react';
import './TodoForm.css';
import {TodoContext} from '../../TodoContext';

function TodoForm() {
  const {setOpenModal, addTodo, editTodo, updateTodo} = useContext(TodoContext);
  const [task, setTask] = useState(editTodo || '');
  const onSubmit = (e) => {
    e.preventDefault();
    if(editTodo){
      updateTodo(editTodo, task)
    }else{
      addTodo({
        text: task,
        date: new Date().toLocaleString(),
        pinned: false,
        completed: false,
      });
    }
    setOpenModal((state) => !state);
  };
  const onChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <p className="llave">{'{'}</p>
      <div className="flex">
        {'\u00A0'.repeat(2)}{' '}
        <label htmlFor="task" className="propiedad">
          task
        </label>
        :
        <div className="text">
          ' <textarea value={task} onChange={onChange} name="task" id="" cols="20" rows="1" placeholder="!!Nuevo Task!!"></textarea> '
        </div>
      </div>
      <p>
        {'\u00A0'.repeat(2)} <span className="propiedad">completed</span>: <span className="bool hover">false</span>
      </p>
      <p className="llave">{'}'}</p>
      <button className="btn-create">Crear</button>
    </form>
  );
}

export {TodoForm};
