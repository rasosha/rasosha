import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from '../UI/LanguageSwitch';
import S from './Header.module.css';

type NewType = FC;

export const Header: NewType = () => {
  const { t } = useTranslation();
  return (
    <header className={S.header}>
      <div className={S.languageSwitch}>
        <LanguageSwitch />
      </div>
      <nav className={S.nav}>
        <div className={S.links}>
          <a
            href="#personal"
            className={S.link}
          >
            {t('section.personal')}
          </a>
          <a
            href="#skills"
            className={S.link}
          >
            {t('section.skills')}
          </a>

          <a
            href="#work"
            className={S.link}
          >
            {t('section.work')}
          </a>
          <a
            href="#education"
            className={S.link}
          >
            {t('section.education')}
          </a>
          <a
            href="#certificates"
            className={S.link}
          >
            {t('section.certificates')}
          </a>
          <a
            href="#portfolio"
            className={S.link}
          >
            {t('section.portfolio')}
          </a>
        </div>
      </nav>
      <section className={S.photoSection}>
        <img
          src="./assets/photo.jpeg"
          alt="profile image"
          className={S.photo}
        />
      </section>
      <section className={S.about}>
        <p className={S.name}>{t('rasosha')}</p>
        <p className={S.aboutSpecialty}>{t('about.speciality')}</p>
        <p className={S.aboutDescription}>{t('about.description')}</p>
      </section>
    </header>
  );
};
