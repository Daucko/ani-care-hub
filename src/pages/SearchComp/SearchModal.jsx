import { useNavigate } from 'react-router-dom';
import classes from './SearchModal.module.css';
import { Form } from 'react-router-dom';
import { TbX } from 'react-icons/tb';
import { useRef } from 'react';

function SearchModal({ children }) {
  const searchRef = useRef();

  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting searchn result...');
    navigate('/');
  }

  return (
    <>
      <div className={classes.backdrop}>
        <dialog open className={classes.modal}>
          <div
            className="bg-white/70 absolute -right-20 -top-20 cursor-pointer"
            onClick={closeHandler}
          >
            <TbX className="h-10 w-10 text-[#2D3250]" />
          </div>
          <form
            action="post"
            className="z-50 w-30 h-20"
            onSubmit={handleSubmit}
          >
            <input type="text" name="search" ref={searchRef} />
          </form>
        </dialog>
      </div>
    </>
  );
}
export default SearchModal;
