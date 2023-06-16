import { useTranslation } from 'react-i18next';
import S from './Main.module.css';
import { FC } from 'react';
import Title from '../UI/Title';
import { Portfolio } from './Portfolio/Portfolio';
import { ReactComponent as OpenLink } from '../../assets/openLink.svg';
import LanguageSwitch from '../UI/LanguageSwitch';

export const Main: FC = () => {
  const { t } = useTranslation();

  return (
    <main className={S.main}>
      <section className={S.section}>
        <div className={S.about}>
          <p className={S.name}>{t('rasosha')}</p>
          <p className={S.aboutSpecialty}>{t('about.speciality')}</p>
          <p className={S.aboutDescription}>{t('about.description')}</p>
          <div className={S.languageSwitch}>
            <LanguageSwitch />
          </div>
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.work')} />
        <div className={S.work}>
          <div className={S.card}>
            <p className={S.cardTitle}>
              {t('work.company.freelance.title')}
              <span className={S.cardTime}>
                {t('month.sep')} 2022 - {t('current')}
              </span>
            </p>
            <a
              href="https://www.github.com/rasosha"
              className={S.cardLink}
            >
              <p className={S.cardCompany}>{t('work.company.freelance.name')}</p>
            </a>
            <p className={S.cardDescription}>{t('work.company.freelance.description')}</p>
          </div>
          <div className={S.card}>
            <p className={S.cardTitle}>
              {t('work.company.railContinent.title')}
              <span className={S.cardTime}>
                {t('month.jun')} 2016 - {t('month.jul')} 2022
              </span>
            </p>
            <a
              href="https://www.railcontinent.ru"
              className={S.cardLink}
            >
              <p className={S.cardCompany}>{t('work.company.railContinent.name')}</p>
            </a>
            <p className={S.cardDescription}>{t('work.company.railContinent.description')}</p>
          </div>
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.education')} />
        <div className={S.education}>
          <div className={S.card}>
            <p className={S.cardTitle}>
              {t('education.rss.institution')}
              <span className={S.cardTime}>{t('month.jun')} 2023</span>
            </p>
            <p className={S.cardCompany}>{t('education.rss.speciality')}</p>
            <p className={S.cardDescription}>{t('education.rss.faculty')}</p>
          </div>
          <div className={S.card}>
            <p className={S.cardTitle}>
              {t('education.mati.institution')}
              <span className={S.cardTime}>{t('month.jun')} 2016</span>
            </p>
            <p className={S.cardCompany}>{t('education.mati.speciality')}</p>
            <p className={S.cardDescription}>{t('education.mati.faculty')}</p>
          </div>
          <div className={S.card}>
            <p className={S.cardTitle}>
              {t('education.kat.institution')}
              <span className={S.cardTime}>{t('month.jun')} 2012</span>
            </p>
            <p className={S.cardCompany}>{t('education.kat.speciality')}</p>
            <p className={S.cardDescription}>{t('education.kat.faculty')}</p>
          </div>
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.certificates')} />
        <div className={S.certificates}>
          <div className={S.certificate}>
            <img
              src="./src/assets/certificates/rsschool.jpg"
              alt=""
              className={S.certificateImage}
            />
            <div className={S.certificateDescription}>
              <p className={S.certificateText}>React 2023 Q1</p>
              <p className={S.certificateOrganization}>The Rolling Scopes School</p>
              <p className={S.certificateDate}>{`${t('issued')} ${t('month.jun')} 2023`}</p>
              <a
                href={'https://app.rs.school/certificate/89n9lhd8'}
                title="RS School React 2023 Q1"
                className={S.certificateLink}
              >
                {t('showCertificate')} <OpenLink />
              </a>
            </div>
          </div>
          <div className={S.certificate}>
            <img
              src="./src/assets/certificates/efset.jpg"
              alt=""
              className={S.certificateImage}
            />
            <div className={S.certificateDescription}>
              <p className={S.certificateText}>EF SET English Certificate 75/100 (C2 Proficient)</p>
              <p className={S.certificateOrganization}>EF Standard English Test (EF SET) </p>
              <p className={S.certificateDate}>{`${t('issued')} ${t('month.may')} 2023`}</p>
              <a
                href={'https://www.efset.org/cert/CzRdMa'}
                title="EF SET English level C2 Proficient"
                className={S.certificateLink}
              >
                {t('showCertificate')} <OpenLink />
              </a>
            </div>
          </div>
          <div className={S.certificate}>
            <img
              src="./src/assets/certificates/rsschool.jpg"
              alt=""
              className={S.certificateImage}
            />
            <div className={S.certificateDescription}>
              <p className={S.certificateText}>Front-end 2022 Q3</p>
              <p className={S.certificateOrganization}>The Rolling Scopes School</p>
              <p className={S.certificateDate}>{`${t('issued')} ${t('month.jun')} 2023`}</p>
              <a
                href={'https://app.rs.school/certificate/qi69aaz5'}
                title="RS School Front-end 2022 Q3"
                className={S.certificateLink}
              >
                {t('showCertificate')} <OpenLink />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.portfolio')} />
        <Portfolio />
      </section>
    </main>
  );
};
