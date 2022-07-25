import { ElementType } from "react";

export type DynamicComponent<P, T> = Omit<T, keyof P | 'as'> &
  P & {
  as?: ElementType;
};

export type Size = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
