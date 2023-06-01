import './TodoItem.css';
import {Close, Edit, Pin, Pinned} from '../icons';
function TodoItem(props) {

  return (
    <li>
      <div className="window-head">
        <span className='w-100'>{props.date}</span>
        <div className='float-right'>
          <div>{props.pinned ? <Pinned /> : <Pin />}</div>
          <div>
            <Edit />
          </div>
          <div onClick={props.onDelete}>
            <Close />
          </div>
        </div>
      </div>
      <div className="window-body">
        <p className="llave">{'{'}</p>
        <p>
          {'\u00A0'.repeat(2)} <span className="propiedad">task</span>:{' '}
          <span className="text" style={props.completed ? {textDecoration: 'line-through'} : {}}>
            '{props.text}'
          </span>
        </p>
        <p>
          {'\u00A0'.repeat(2)} <span className="propiedad">completed</span>: <span className="bool hover" onClick={props.onComplete}>{props.completed ? 'true' : 'false'}</span>
        </p>
        <p className="llave">{'}'}</p>
      </div>
    </li>
  );
}

export {TodoItem};
