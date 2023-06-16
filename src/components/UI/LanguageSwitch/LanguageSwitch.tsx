import { useState } from 'react';
import i18n from '../../../../i18n';
import S from './LanguageSwitch.module.css';

export const LanguageSwitch = () => {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'en');

  const handleChangeLocale = () => {
    if (language === 'en') {
      setLanguage('ru');
      i18n.changeLanguage('ru');
    } else {
      setLanguage('en');
      i18n.changeLanguage('en');
    }
  };

  return (
    <>
      <input
        className={S.reactSwitchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
        checked={language === 'ru'}
        onChange={() => handleChangeLocale()}
      />
      <label
        className={S.reactSwitchLabel}
        htmlFor={`react-switch-new`}
      >
        <span className={S.reactSwitchButton} />
      </label>
    </>
  );
};
