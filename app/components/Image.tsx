import { FC, ImgHTMLAttributes } from 'react';

export const Image = ({ src }: ImgHTMLAttributes<HTMLImageElement>) => {
  // process for image optimization

  return <img src={src} />
}
