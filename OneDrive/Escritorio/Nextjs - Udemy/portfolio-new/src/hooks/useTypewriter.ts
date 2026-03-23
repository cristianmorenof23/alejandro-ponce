import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1800
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}