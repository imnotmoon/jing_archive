import { FC } from 'react';
import { Image } from './Image';

type FrameProps = {
  id: number,
  title: string,
  date: Date | string,
}

const imageUrl = 'https://storage.com/path-to-directory/'

export const Frame: FC<FrameProps> = ({ id, title, date }) => {
  return <div><Image src={`${imageUrl}/id`} /></div>;
}
