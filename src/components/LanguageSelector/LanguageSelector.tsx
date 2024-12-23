import React from "react";
import { type LanguageName } from '@uiw/codemirror-extensions-langs';
import styles from './style.module.css'

interface LanguageSelectorProps {
  languageList: LanguageName[];
  onChange: (newLangiage: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageSelector = ({ languageList, onChange }: LanguageSelectorProps) => {

  return (
    <select className={styles.select} onChange={onChange}>
        {
            languageList.map(language => {
                return (
                    <option value={language}>{language}</option>
                )
            })
        }
    </select>
  );
};
