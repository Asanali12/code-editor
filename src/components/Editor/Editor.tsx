import React, { useState, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { ResultTerminal } from "../ResultTerminal";
import { LanguageSelector } from "../LanguageSelector";
import { Button } from "../Button";
import { useLanguageExtensionArray } from '../../utils/languages/useLanguage';
import { languageList, defaultCodeValues, languageModes } from '../../utils/languages/constants';
import { type LanguageName } from '@uiw/codemirror-extensions-langs';

import styles from './styles.module.css';


export const Editor = () => {
  const [showResults, setShowResults] = useState(false);
  const [status, setStatus] = useState<string>('none');
  const [terminalText, setTerminalText] = useState<string>('Loading...');
  //@ts-ignore
  const [code, setCode] = useState<string>(defaultCodeValues[languageList[0]])
  const [currentLanguage, setCurrentLanguage] = useState(languageList[0] as LanguageName)
  const [eachLanguageCode, setEachLanguageCode] = useState({
    ...defaultCodeValues
  })

  const codeOptions = useMemo(() => {
    return {
        mode: languageModes[currentLanguage],
        line: true,
        lineNumbers: true,
        tabSize: 2,
        styleActiveLine: true,
        lineWrapping: true,
        foldGutter: true
    }
  }, [currentLanguage])

  const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value
    setEachLanguageCode({
        ...eachLanguageCode,
        [currentLanguage]: code,
    })
    setCurrentLanguage(newLanguage as LanguageName)
    setCode(eachLanguageCode[newLanguage as Partial<LanguageName>]!)
  }

  const onSendCode = () => {
    setShowResults(true);
    setTerminalText('Loading...');
    fetch('/send', {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        language: currentLanguage,
        code,
      })
    }).then((res) => {
        //@ts-ignore
        const result = JSON.parse(res._bodyText);
        //@ts-ignore
        setTerminalText(result.output);
        if (result.status === 'success') {
          setStatus('success')
        } else {
          setStatus('error')
        }
      })
  }

  return (
    <>
      <div className={styles.codeTextField}>
        <div className={styles.controls}>
          <LanguageSelector onChange={onLanguageChange} languageList={languageList} />
          <div className={styles.statusContainer}>
            {
              status !== 'none' && (
                <div className={status === 'success' ? styles.success : styles.error}>{status === 'success' ? 'Success' : 'Error'}</div>
              )
            }
            <Button caption={'Run'} onClick={onSendCode}/>
          </div>
        </div>
        <div style={{ flex: "1 1", overflow: 'auto' }}>
          <CodeMirror value={code} onChange={(code) => {setCode(code)}} theme={okaidia} extensions={[useLanguageExtensionArray(currentLanguage)]} {...codeOptions} />
        </div>
      </div>
      {
        showResults && (
          <div className={styles.terminal}>
            <ResultTerminal text={terminalText}/>
          </div>
        )
      }
    </>
  );
};
