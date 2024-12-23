interface ResultTerminalProps {
  text: string;
  [x: string | number | symbol]: unknown;
}

export const ResultTerminal = ({ text, ...props }: ResultTerminalProps) => {

  return (
    <div {...props}>
      <pre>
        <code>
          {text}
        </code>
      </pre>
    </div>
  );
};
