import S from './TextBox.module.css';
import { FC } from 'react';

interface TextBoxProps {
  text: string;
  label: string;
  link?: string | null;
}

export const TextBox: FC<TextBoxProps> = ({ link, text, label }) => {
  return (
    <div className={S.textBox}>
      {link ? (
        <a
          href={link}
          className={S.textBoxLink}
        >
          {text}
        </a>
      ) : (
        <p className={S.textBoxText}>{text}</p>
      )}

      <p className={S.textBoxLabel}>{label}</p>
    </div>
  );
};
