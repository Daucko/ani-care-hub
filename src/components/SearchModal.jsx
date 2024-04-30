import { useNavigate } from 'react-router-dom';
import classes from './SearchModal.module.css';

function SearchModal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}>
        <dialog open className={classes.modal}>
          {children}
        </dialog>
      </div>
    </>
  );
}
export default SearchModal;
