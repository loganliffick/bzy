import { createContext } from 'react';

const ModalContext = createContext({
  setState: () => {},
});

export default ModalContext;
