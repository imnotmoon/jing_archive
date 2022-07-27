import { createContext, useState, useContext, useCallback, FC, ComponentType } from 'react'

export type ModalContextType = {
  component: ComponentType | undefined,
  modalProps?: { [key: string]: any },
  isOpened: boolean,
  show?: (component: ComponentType | undefined, modalProps: { [key: string] : any }) => void,
  close?: () => void,
}
export const ModalContext = createContext<ModalContextType>({
  component: undefined,
  isOpened: false,
});

export const ModalProvider: FC = ({ children }) => {
  const [data, setData] = useState<ModalContextType>({
    component: undefined,
    isOpened: false,
  });

  const show = useCallback((component, modalProps) =>
    setData(data => ({...data, component, modalProps, isOpened: true})), []);
  const close = useCallback(() =>
    setData(data => ({...data, isOpened: false})), []);

  return <ModalContext.Provider value={{...data, show, close}}>{children}</ModalContext.Provider>
}

export const useModalContext = () => useContext(ModalContext);
