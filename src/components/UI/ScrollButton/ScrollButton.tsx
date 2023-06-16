import { useEffect, useState } from 'react';
import S from './ScrollButton.module.css';
import { ReactComponent as ArrowUp } from '../../../assets/up-arrow.svg';

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  });
  return (
    <button
      onClick={scrollToTop}
      className={visible ? S.button : `${S.button} ${S.hidden}`}
    >
      <ArrowUp className={S.img} />
    </button>
  );
};
