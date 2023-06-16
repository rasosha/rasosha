import S from './Aside.module.css';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from '../UI/Title/Title';
import TextBox from '../UI/TextBox';

export const Aside: FC = () => {
  const { t } = useTranslation();

  return (
    <aside className={S.aside}>
      <section className={S.section}>
        <img
          src="./src/assets/photo.jpeg"
          alt="profile image"
          className={S.photo}
        />
      </section>
      <section className={S.section}>
        <Title text={t('section.personal')} />
        <div className={S.personalInfo}>
          <TextBox
            text={t('personal.location.text')}
            label={t('personal.location.label')}
          />
          <TextBox
            text="rasosha@gmail.com"
            label={t('personal.email')}
          />
          <TextBox
            text={t('personal.resume.name')}
            label={t('personal.resume.site')}
            link={t('personal.resume.link')}
          />
          <TextBox
            text="rasosha"
            label={t('personal.github')}
            link="https://www.github.com/rasosha/"
          />
          <TextBox
            text="@rasosha7"
            label={t('personal.telegram')}
            link="https://www.t.me/rasosha7"
          />
          <TextBox
            text={t('personal.phone.number')}
            label={t('personal.phone.phone')}
            link={`tel:${t('personal.phone.number')}`}
          />
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.skills')} />
        <div className={S.skills}>
          <TextBox
            text="HTML5 (ES Next)"
            label={t('skills.html')}
          />
          <TextBox
            text="CSS3"
            label={t('skills.css')}
          />
          <TextBox
            text="JavaScript, TypeScript"
            label={t('skills.programming')}
          />
          <TextBox
            text="React, React Router, Next, i18n, Tailwind, Styled Components"
            label={t('skills.frameworks')}
          />
          <TextBox
            text="Redux, Zustand"
            label={t('skills.state')}
          />
          <TextBox
            text="npm, pnpm, yarn"
            label={t('skills.package')}
          />
          <TextBox
            text="git, GitHub"
            label={t('skills.git')}
          />
          <TextBox
            text="Photoshop, Figma"
            label={t('skills.design')}
          />
          <TextBox
            text="google"
            label={t('skills.google')}
          />
        </div>
      </section>
      <section className={S.section}>
        <Title text={t('section.languages')} />
        <div className={S.languages}>
          <TextBox
            text={t('languages.russian')}
            label={t('languages.native')}
          />
          <TextBox
            text={t('languages.english')}
            label={t('languages.proficient')}
          />
        </div>
      </section>
    </aside>
  );
};
