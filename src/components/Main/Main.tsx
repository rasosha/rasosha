import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import Portfolio from './Portfolio/';
import S from './Main.module.css';
import Title from '../UI/Title';
import Card from './Card/';
import Certificate from './Certificate';

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
        <Portfolio />
      </section>
    </main>
  );
};
