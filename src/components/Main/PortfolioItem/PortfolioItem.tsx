import { useTranslation } from 'react-i18next';
import S from './PortfolioItem.module.css';
import { FC } from 'react';

export interface PortfolioItemType {
  title: string;
  description: string;
  stack: string;
  task?: string;
  deploy: string;
  repository?: string;
  image: string;
}

export const PortfolioItem: FC<PortfolioItemType> = ({ title, description, stack, image, task, deploy, repository }) => {
  const { t } = useTranslation();
  return (
    <div className={S.portfolioItem}>
      <p className={S.portfolioItemTitle}>{title}</p>
      <p className={S.portfolioItemDescription}>{description}</p>

      <div className={S.portfolioItemPreview}>
        <img
          src={image}
          alt="preview"
          className={S.portfolioItemImage}
        />
        <div className={S.portfolioItemLinks}>
          {task && <a href={task}>{t('portfolio.task')}</a>}
          <a href={deploy}>{t('portfolio.deploy')}</a>
          {repository && <a href={repository}>{t('portfolio.repo')}</a>}
        </div>
      </div>
      <ul className={S.portfolioItemStack}>
        {stack.split(',').map((item, index) => (
          <li
            key={index}
            className={S.stackItem}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
