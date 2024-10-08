import { useState } from "react";
import * as st from "./emoji-style";

function EmojiGenerator() {
  const [length, setLength] = useState("");
  const [result, setResult] = useState("");

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.value);
  };

  const handleGenerateClick = () => {
    setResultet(generateEmoji(length));
  };

  const emojisAfterWords = (text: string, array: string[]) => {
    return text
      .replace(/(\p{L}+)(?=\s|$)/gu, (match) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomEmoji = array[randomIndex];
        return `${match}${randomEmoji}`;
      })
      .replace(/([.,!?])/g, (match) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomEmoji = array[randomIndex];
        return `${match}${randomEmoji}`;
      });
  };

  const generateEmoji = (text: string) => {
    const emojis = [
      "😀",
      "😂",
      "😍",
      "😎",
      "🤔",
      "😇",
      "😜",
      "😱",
      "😴",
      "😈",
      "👻",
      "👽",
      "🤖",
      "💩",
      "👾",
      "🎃",
      "😺",
      "😸",
      "😹",
      "😻",
      "😼",
      "😽",
      "🙀",
      "😿",
      "😾",
      "🙈",
      "🙉",
      "🙊",
      "🐵",
      "🐶",
      "🐺",
      "🐱",
      "🦁",
      "🐯",
      "🐴",
      "🦄",
      "🐮",
      "🐷",
      "🐽",
      "🐸",
      "🐙",
      "🐵",
      "🐔",
      "🐧",
      "🐦",
      "🐤",
      "🐣",
      "🐥",
      "🐺",
      "🐗",
    ];
    return emojisAfterWords(text, emojis);
  };

  return (
    <st.Section>
      <st.Wrapper>
        <st.TitleWrapper>
          <st.Title>Эмодзи</st.Title>
          <st.Flex>
            <st.EmojiBlock>
              <label>
                <st.Span>Ваш текст:</st.Span>
                <st.Input type="string" value={length} onChange={handleLengthChange} />
              </label>
              <st.Span>Результат: {generateEmoji(length)}</st.Span>
            </st.EmojiBlock>
          </st.Flex>
        </st.TitleWrapper>
      </st.Wrapper>
    </st.Section>
  );
}

export default EmojiGenerator;
