import { FC, ReactNode, HTMLProps, MouseEvent } from 'react';
import {DynamicComponent, Size } from './types';

type ButtonType = 'submit' | 'reset' | 'button';

type Props = {
  children: ReactNode,
  type?: ButtonType,
  color?: string,
  size?: Size,
  label?: string,
  onClick?: (e: MouseEvent) => void,
};

export type ButtonProps<T = HTMLProps<HTMLButtonElement>> =  DynamicComponent<Props, T>;

export const Button: FC<ButtonProps> = ({ children, as: As = 'button' }) => <As>{children}</As>;
