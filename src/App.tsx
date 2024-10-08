import styled from "styled-components";
import Navigation from "./components/UI/header/header";
import EmojiGenerator from "./components/emoji";

function App() {
  return (
    <MainSection>
      <Navigation></Navigation>
      <EmojiGenerator></EmojiGenerator>
      <Content></Content>
    </MainSection>
  );
}

export default App;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;
