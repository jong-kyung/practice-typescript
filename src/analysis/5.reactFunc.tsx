import React, {
  useState,
  useCallback,
  useRef,
  FC,
  ReactNode,
  useEffect,
  FormEvent,
  MouseEvent,
  ChangeEvent,
} from "react";

// 컴포넌트의 구조 -> 사실은 JSX를 반환하는 함수
// (prop) => JSX

interface P {
  name: string;
  title: string;
  children?: ReactNode | undefined;
}

const WordRelay: FC = () => {
  const [word, setWord] = useState<string>("감자");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null); // RefObject로 만들어줘야 함

  useEffect(() => {
    console.log("useEffect");
    const func = async () => {
      console.log("async");
    };

    return () => {
      console.log("useEffect clear");
    };
  }, []);

  const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {}, []);

  const onSubmitForm = useCallback<(e: FormEvent<HTMLFormElement>) => void>(
    (e) => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult("딩동댕");
        setWord(value);
        setValue("");
        if (input) {
          input.focus();
        }
      } else {
        setResult("땡");
        setValue("");
        if (input) {
          input.focus();
        }
      }
    },
    [word, value]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
