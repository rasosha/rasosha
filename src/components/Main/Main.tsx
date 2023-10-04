import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import S from './Main.module.css';
import Title from '../UI/Title';
import Card from './Card/';
import Certificate from './Certificate';
import { PortfolioItem, PortfolioItemType } from './PortfolioItem/PortfolioItem';

export const Main: FC = () => {
  const { t } = useTranslation();

  const works = [
    {
      title: t('work.company.freelance.title'),
      time: `${t('month.sep')} 2022 — ${t('current')}`,
      link: 'https://www.github.com/rasosha',
      company: t('work.company.freelance.name'),
      description: t('work.company.freelance.description'),
    },
    {
      title: t('work.company.railContinent.title'),
      time: `${t('month.jun')} 2016 — ${t('month.jul')} 2022`,
      link: 'https://www.railcontinent.ru',
      company: t('work.company.railContinent.name'),
      description: t('work.company.railContinent.description'),
    },
    {
      title: t('work.company.railContinent2.title'),
      time: `${t('month.jun')} 2016 — ${t('month.jul')} 2022`,
      link: 'https://www.railcontinent.ru',
      company: t('work.company.railContinent2.name'),
      description: t('work.company.railContinent2.description'),
    },
  ];

  const education = [
    {
      title: t('education.rss.institution'),
      time: `${t('month.jun')} 2023`,
      company: t('education.rss.speciality'),
      description: t('education.rss.faculty'),
    },
    {
      title: t('education.mati.institution'),
      time: `${t('month.jun')} 2016`,
      company: t('education.mati.speciality'),
      description: t('education.mati.faculty'),
    },
    {
      title: t('education.kat.institution'),
      time: `${t('month.jun')} 2012`,
      company: t('education.kat.speciality'),
      description: t('education.kat.faculty'),
    },
  ];

  const certificates = [
    {
      image: './assets/certificates/rsschool.jpg',
      title: 'React 2023 Q1',
      organization: 'The Rolling Scopes School',
      date: `${t('issued')} ${t('month.jun')} 2023`,
      link: 'https://app.rs.school/certificate/89n9lhd8',
    },
    {
      image: './assets/certificates/efset.jpg',
      title: 'EF SET English Certificate 75/100 (C2 Proficient)',
      organization: 'EF Standard English Test (EF SET)',
      date: `${t('issued')} ${t('month.may')} 2023`,
      link: 'https://www.efset.org/cert/CzRdMa',
    },
    {
      image: './assets/certificates/rsschool.jpg',
      title: 'Front-end 2022 Q3',
      organization: 'The Rolling Scopes School',
      date: `${t('issued')} ${t('month.mar')} 2023`,
      link: 'https://app.rs.school/certificate/qi69aaz5',
    },
  ];
  const portfolio: PortfolioItemType[] = [
    {
      title: t('portfolio.item10.title'),
      description: t('portfolio.item10.description'),
      stack: 'TypeScript, React, Next.js, tailwindcss, React Hook Form, Feature Sliced Design',
      deploy: 'https://bravomeat.ru',
      image: './assets/portfolio/bravomeat.png',
    },
    {
      title: t('portfolio.item9.title'),
      description: t('portfolio.item9.description'),
      stack: 'TypeScript, React, Next.js',
      deploy: 'https://armageddon-ras.vercel.app',
      repository: 'https://github.com/rasosha/kvartirka-test',
      image: './assets/portfolio/asteroids.png',
    },
    {
      title: t('portfolio.item8.title'),
      description: t('portfolio.item8.description'),
      stack: 'TypeScript, React, Zustand, Google Firebase',
      deploy: 'https://wordle-ras.web.app',
      repository: 'https://github.com/rasosha/wordle-ras',
      image: './assets/portfolio/wordle.png',
    },
    {
      title: t('portfolio.item1.title'),
      description: t('portfolio.item1.description'),
      stack: 'TypeScript, React, Zustand',
      image: './assets/portfolio/green-api.png',
      task: 'https://drive.google.com/file/d/1c3HDbZJuPdfv7FaUYo8kEMzsfM2AkKwI/view',
      deploy: 'https://develop--rasosha-green-api.netlify.app/',
      repository: 'https://github.com/rasosha/green-api',
    },
    {
      image: './assets/portfolio/graphiql.png',
      title: t('portfolio.item2.title'),
      description: t('portfolio.item2.description'),
      stack: 'TypeScript, React, React Router, Zustand, Google Firebase, i18n, tailwindcss',
      task: 'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md',
      deploy: 'https://graphiql-app-react.netlify.app/main',
      repository: 'https://github.com/IvanBusygin/graphiql-app/pull/22',
    },
    {
      image: './assets/portfolio/rickandmortyapi.png',
      title: t('portfolio.item3.title'),
      description: t('portfolio.item3.description'),
      stack: 'TypeScript, React, React Router, Redux, React-Hook-Form,  Vitest ',
      task: 'https://github.com/rolling-scopes-school/tasks/tree/master/react/modules',
      deploy: 'https://rasosha-react-week-5.netlify.app',
      repository: 'https://github.com/rasosha/react/pull/5',
    },
    {
      image: './assets/portfolio/online-store.png',
      title: t('portfolio.item4.title'),
      description: t('portfolio.item4.description'),
      stack: 'TypeScript, custom hash router, webpack',
      task: 'https://github.com/rolling-scopes-school/tasks/tree/master/tasks/online-store-team',
      deploy: 'https://ranynight.github.io/online-store/#main/',
      repository: 'https://github.com/raNYnight/online-store/pull/4',
    },
    {
      image: './assets/portfolio/songbird.png',
      title: t('portfolio.item5.title'),
      description: t('portfolio.item5.description'),
      stack: 'JavaScript, webpack',
      task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md',
      deploy: 'https://rsschool-rasosha.netlify.app/songbird/index.html',
      repository: 'https://github.com/rasosha/RS-School/tree/develop/songbird',
    },
    {
      image: './assets/portfolio/gempuzzle.png',
      title: t('portfolio.item6.title'),
      description: t('portfolio.item6.description'),
      stack: 'JavaScript, webpack',
      task: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/stage-1/dom-api/codejam-the-gem-puzzle.md',
      deploy: 'https://rsschool-rasosha.netlify.app/gempuzzle/index.html',
      repository: 'https://github.com/rasosha/RS-School/tree/develop/gempuzzle',
    },
    {
      image: './assets/portfolio/online-zoo.png',
      title: t('portfolio.item7.title'),
      description: t('portfolio.item7.description'),
      stack: 'JavaScript',
      task: 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1/stream2/online-zoo',
      deploy: 'https://rsschool-rasosha.netlify.app/online-zoo/pages/main/index.html',
      repository: 'https://github.com/rasosha/RS-School/tree/develop/online-zoo',
    },
  ];
  return (
    <main className={S.main}>
      <section
        className={S.section}
        id="work"
      >
        <Title text={t('section.work')} />
        <div className={S.work}>
          {works.map((work) => {
            return (
              <Card
                {...work}
                key={work.company}
              />
            );
          })}
        </div>
      </section>
      <section
        className={S.section}
        id="education"
      >
        <Title text={t('section.education')} />
        <div className={S.education}>
          {education.map((education) => {
            return (
              <Card
                {...education}
                key={education.company}
              />
            );
          })}
        </div>
      </section>
      <section
        className={S.section}
        id="certificates"
      >
        <Title text={t('section.certificates')} />
        <div className={S.certificates}>
          {certificates.map((certificate) => {
            return (
              <Certificate
                {...certificate}
                key={certificate.title}
              />
            );
          })}
        </div>
      </section>
      <section
        className={S.section}
        id="portfolio"
      >
        <Title text={t('section.portfolio')} />
        {portfolio.map((item) => {
          return (
            <PortfolioItem
              deploy={item.deploy}
              title={item.title}
              description={item.description}
              stack={item.stack}
              image={item.image}
              task={item.task}
              repository={item.repository}
            />
          );
        })}
      </section>
    </main>
  );
};
