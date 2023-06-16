import S from './Title.module.css';
import { FC } from 'react';

interface TitleProps {
  text: string;
  label?: string;
  link?: string | null;
}

export const Title: FC<TitleProps> = ({ text }: TitleProps) => {
  return <h1 className={S.title}>{text}</h1>;
};
