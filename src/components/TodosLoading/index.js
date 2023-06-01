import {Close, Edit, Pin} from '../icons';
import './TodosLoading.css';
function TodosLoading() {
  return (
    <>
      <li>
        <div className="window-head">
          <span className="skeleton skeleton-text skeleton-text__body"></span>
          <div>
            <Pin />
          </div>
          <div>
            <Edit />
          </div>
          <div>
            <Close />
          </div>
        </div>
        <div className="skeleton window-body-loading"></div>
      </li>
    </>
  );
}
export {TodosLoading};
