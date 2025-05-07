import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #d8ccb5;

  @media (max-width: 480px) {
    padding: 2px;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: 900;
  font-size: 2.2rem;
`;

const P = styled.p`
  font-weight: 700;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 7px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }
`;

const LaterContainer = styled.div`
  border: 2px solid #d8ccb5;
  width: 200px;
  height: 100px;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    aspect-ratio: 1 / 1.1;
    width: 200px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 75px;
    height: 55px;
    aspect-ratio: 1 / 1.2;
  }
`;

const LaterH1 = styled.h1`
  margin: 0;
  font-size: 2.8rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const LaterP = styled.p`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Footer = styled.div`
    width: 100%;
`;

const Body = () => {
  const letters = [
    ["A", "887"],
    ["B", "951"],
    ["C", "071"],
    ["D", "729"],
    ["E", "624"],
    ["F", "383"],
    ["G", "265"],
    ["H", "152"],
    ["I", "142"],
    ["J", "571"],
    ["K", "182"],
    ["L", "985"],
    ["M", "116"],
    ["N", "796"],
    ["O", "674"],
    ["P", "478"],
    ["Q", "218"],
    ["R", "917"],
    ["S", "391"],
    ["T", "518"],
    ["U", "318"],
    ["V", "679"],
    ["W", "184"],
    ["X", "533"],
    ["Y", "821"],
    ["Z", "017"],
    ["SH", "927"],
    ["CH", "441"],
    ["NG", "749"],
    ["G'", "259"],
    ["O'", "470"],
    ["'", "058"],
    ["_", "063"],
    ["!", "647"],
    ["?", "018"],
  ];

  return (
    <Wrapper>
      <Title>
        <H1>Kamoldinovich</H1>
        <P>
          Istagan yozma ravishda bo‘lgan ma’lumotlaringizni yoki shaxsiy
          fikrlaringizni raqamli alfabit yordamida bemalol yozishingiz mumkin
        </P>
      </Title>
      <BodyWrapper>
        {letters.map(([char, code]) => (
          <LaterContainer key={char}>
            <LaterH1>{char}</LaterH1>
            <LaterP>{code}</LaterP>
          </LaterContainer>
        ))}
      </BodyWrapper>

      <Footer>
        <P>&copy; 2025 a-anvarbek</P>
      </Footer>
    </Wrapper>
  );
};

export default Body;
