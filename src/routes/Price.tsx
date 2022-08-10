import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.tapColor};
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 5px 0;
`;

const ContentTitle = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
  font-weight: 800;
`;

const ConTentMain = styled.div<{ checker?: number }>`
  font-size: 30px;
  color: ${(props) =>
    props.checker!
      ? props.checker > 0
        ? "crimson"
        : "skyblue"
      : props.theme.accentColor};
`;

interface IQuote {
  ath_price: number;
  market_cap: number;
  percent_change_1h: number;
  volume_24h: number;
}

interface IPrice {
  price: any;
  name: string;
}

function Price({ price, name }: IPrice) {
  const date: IQuote = price.quotes.USD;
  console.log(price);
  return (
    <Container>
      <Helmet>
        <title>{`${name} | Price`}</title>
      </Helmet>
      <Content>
        <ContentTitle>ALL TIME HIGH PRICE</ContentTitle>
        <ConTentMain>${date.ath_price}</ConTentMain>
      </Content>
      <Content>
        <ContentTitle>MARKET CAP</ContentTitle>
        <ConTentMain>${date.market_cap}</ConTentMain>
      </Content>
      <Content>
        <ContentTitle>PRICE CHANGE IN 1H</ContentTitle>
        <ConTentMain checker={date.percent_change_1h}>
          {date.percent_change_1h}%
        </ConTentMain>
      </Content>

      <Content>
        <ContentTitle>COIN VOLUME IN 24H</ContentTitle>
        <ConTentMain>{date.volume_24h}</ConTentMain>
      </Content>
    </Container>
  );
}

export default Price;
