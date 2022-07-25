import { FC, ReactNode } from 'react';
import { useModalContext } from '~/context/ModalContext';

export const Modal: FC = () => {
  const { component: Component, isOpened, modalProps } = useModalContext();
  return isOpened
    ? <div>{Component && <Component {...modalProps} />}</div>
    : null;
}
