import S from './Portfolio.module.css';
import { FC } from 'react';
import { PortfolioItem } from './PortfolioItem/PortfolioItem';
import { useTranslation } from 'react-i18next';

interface PortfolioItem {
  title: string;
  description: string;
  stack: string;
  task: string;
  deploy: string;
  repository: string;
  image: string;
}

export const Portfolio: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={S.portfolio}>
      <PortfolioItem
        title={t('portfolio.item9.title')}
        description={t('portfolio.item9.description')}
        image="./assets/portfolio/asteroids.png"
        stack="TypeScript, React, Next.js"
        deploy="https://armageddon-ras.vercel.app"
        repository="https://github.com/rasosha/kvartirka-test/"
      />
      <PortfolioItem
        title={t('portfolio.item8.title')}
        description={t('portfolio.item8.description')}
        image="./assets/portfolio/wordle.png"
        stack="TypeScript, React, Zustand, Google Firebase"
        deploy="https://wordle-ras.web.app"
        repository="https://github.com/rasosha/wordle-ras"
      />
      <PortfolioItem
        title={t('portfolio.item1.title')}
        description={t('portfolio.item1.description')}
        image="./assets/portfolio/green-api.png"
        stack="TypeScript, React, Zustand"
        task="https://drive.google.com/file/d/1c3HDbZJuPdfv7FaUYo8kEMzsfM2AkKwI/view"
        deploy="https://develop--rasosha-green-api.netlify.app/"
        repository="https://github.com/rasosha/green-api"
      />
      <PortfolioItem
        image="./assets/portfolio/graphiql.png"
        title={t('portfolio.item2.title')}
        description={t('portfolio.item2.description')}
        stack="TypeScript, React, React Router, Zustand, Google Firebase, i18n, tailwindcss"
        task="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
        deploy="https://graphiql-app-react.netlify.app/main"
        repository="https://github.com/IvanBusygin/graphiql-app/pull/22"
      />
      <PortfolioItem
        image="./assets/portfolio/rickandmortyapi.png"
        title={t('portfolio.item3.title')}
        description={t('portfolio.item3.description')}
        stack="TypeScript, React, React Router, Redux, React-Hook-Form,  Vitest "
        task="https://github.com/rolling-scopes-school/tasks/tree/master/react/modules"
        deploy="https://rasosha-react-week-5.netlify.app"
        repository="https://github.com/rasosha/react/pull/5"
      />
      <PortfolioItem
        image="./assets/portfolio/online-store.png"
        title={t('portfolio.item4.title')}
        description={t('portfolio.item4.description')}
        stack="TypeScript, custom hash router, webpack"
        task="https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team"
        deploy="https://ranynight.github.io/online-store/#main/"
        repository="https://github.com/raNYnight/online-store/pull/4"
      />
      <PortfolioItem
        image="./assets/portfolio/songbird.png"
        title={t('portfolio.item5.title')}
        description={t('portfolio.item5.description')}
        stack="JavaScript, webpack"
        task="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md"
        deploy="https://rsschool-rasosha.netlify.app/songbird/index.html"
        repository="https://github.com/rasosha/RS-School/tree/develop/songbird"
      />
      <PortfolioItem
        image="./assets/portfolio/gempuzzle.png"
        title={t('portfolio.item6.title')}
        description={t('portfolio.item6.description')}
        stack="JavaScript, webpack"
        task="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md"
        deploy="https://rsschool-rasosha.netlify.app/gempuzzle/index.html"
        repository="https://github.com/rasosha/RS-School/tree/develop/gempuzzle"
      />
      <PortfolioItem
        image="./assets/portfolio/online-zoo.png"
        title={t('portfolio.item7.title')}
        description={t('portfolio.item7.description')}
        stack="JavaScript"
        task="https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo"
        deploy="https://rsschool-rasosha.netlify.app/online-zoo/pages/main/index.html"
        repository="https://github.com/rasosha/RS-School/tree/develop/online-zoo"
      />
    </div>
  );
};
