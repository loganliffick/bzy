import styled from 'styled-components';
import { useContext } from 'react';

// hooks
import ModalContext from '@/hooks/modal-context';

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  /* visibility: hidden;
  opacity: 0; */

  background: RGBA(17, 14, 131, 0.3);
  backdrop-filter: blur(4px);

  &[data-attribute='true'] {
    visibility: visible;
    opacity: 1;
  }
`;

const Form = styled.form`
  padding: 24px;
  height: 400px;
  width: 600px;
  border-radius: 24px;
  background: var(--white);
  color: blue;
  position: relative;
`;

const Modal = ({ isActive }) => {
  const { setState } = useContext(ModalContext);

  return isActive ? (
    <Overlay data-attribute={isActive} onClick={() => setState(false)}>
      <Form
        onClick={(e) => {
          e.preventDefault;
        }}
      >
        test
      </Form>
    </Overlay>
  ) : null;
};

export default Modal;
