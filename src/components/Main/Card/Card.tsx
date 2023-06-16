import { FC } from 'react';
import S from './Card.module.css';

interface Card {
  title: string;
  time: string;
  link?: string;
  company: string;
  description: string;
}

export const Card: FC<Card> = ({ title, time, link, company, description }: Card) => {
  return (
    <div className={S.card}>
      <p className={S.cardTitle}>
        {title}
        <span className={S.cardTime}>{time}</span>
      </p>
      <a
        href={link}
        className={S.cardLink}
      >
        <p className={S.cardCompany}>{company}</p>
      </a>
      <p className={S.cardDescription}>{description}</p>
    </div>
  );
};
