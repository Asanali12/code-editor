import ReactMarkdown from 'react-markdown'
import { problems } from "./constants";


export const ProblemText = () => {

  return (
      <ReactMarkdown children={problems[0]} />
  );
};
