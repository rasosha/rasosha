import { FC } from 'react';
import S from './Certificate.module.css';
import { ReactComponent as OpenLink } from '../../../assets/icons/openLink.svg';
import { useTranslation } from 'react-i18next';

interface Certificate {
  image: string;
  title: string;
  organization: string;
  date: string;
  link: string;
}

export const Certificate: FC<Certificate> = ({ image, title, link, organization, date }: Certificate) => {
  const { t } = useTranslation();
  return (
    <div className={S.certificate}>
      <img
        src={image}
        alt="logo"
        className={S.certificateImage}
      />
      <div className={S.certificateDescription}>
        <p className={S.certificateText}>{title}</p>
        <p className={S.certificateOrganization}>{organization}</p>
        <p className={S.certificateDate}>{date}</p>
        <a
          href={link}
          className={S.certificateLink}
        >
          {t('showCertificate')} <OpenLink />
        </a>
      </div>
    </div>
  );
};
