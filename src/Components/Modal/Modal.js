import { useRef, useState } from 'react';

import { useOutsideClick } from '../../Hooks'

import './Modal.css'

function Modal() {
  const ref = useRef();

  const [isModalOpen, setModalOpen] = useState(false);
  useOutsideClick(ref, () => setModalOpen(false));
  return <div className="modal" >
    {isModalOpen ? (
      <div className='modal-overlay' ref={ref} >
        <span>
          👋  <h3>Todo list </h3>
        </span>

      </div>
    ) : (
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
    )}
  </div>

}
export default Modal


