import React from "react";
import styles from './style.module.css'

interface ButtonProps {
  caption: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button = ({ caption, onClick }: ButtonProps) => {

  return (
    <button className={styles.button} onClick={onClick}>
      {caption}
    </button>
  );
};
