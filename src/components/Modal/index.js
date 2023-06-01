import {createPortal} from 'react-dom';
import {Close, Pin, Pinned} from '../icons';
import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './Modal.css';

function Modal(props) {
  const {setOpenModal} = useContext(TodoContext)
  const ui = (
    <div className="bg">
      <div className="modal-window">
        <div className="window-head">
          <span className='w-100'>{new Date().toLocaleString()}</span>
          <div className="float-right">
            <div>{props.pinned ? <Pinned /> : <Pin />}</div>
            <div onClick={()=>{setOpenModal(state => !state)}}>
              <Close />
            </div>
          </div>
        </div>
        <div className="window-body-modal">{props.children}</div>
      </div>
    </div>
  );
  return createPortal(ui, document.getElementById('modal'));
}
export {Modal};
