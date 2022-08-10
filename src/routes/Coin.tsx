import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import { Helmet } from "react-helmet";
import { useMatch } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const BackBtn = styled.div`
  position: fixed;
  font-size: 23px;
  left: 20px;
  color: #616977;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 70px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 15px;
  font-size: 17px;
  color: ${(props) => props.theme.accentColor};
  margin: 20px 0;
`;

const TapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Tap = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.accentColor : props.theme.tapColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.tapColor};
  padding: 15px;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

const DateSpan = styled.span`
  color: ${(props) => props.theme.textColor};
  margin-left: 10px;
`;

interface RouterState {
  name: string;
}

interface InfoDate {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceDate {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouterState;

  const [info, setInfo] = useState<InfoDate>();
  const [priceinfo, setPriceInfo] = useState<PriceDate>();

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const [time, setTime] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    (async () => {
      const infoData = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const infoJson = await infoData.json();
      setInfo(infoJson);
    })();

    (async () => {
      const priceData = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      const priceJson = await priceData.json();
      setPriceInfo(priceJson);
    })();

    setLoading(false);
  }, [coinId]);

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? `${state.name}` : loading ? "Loading..." : info?.name}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : info?.name}
        </Title>
        <Link to={`/coin-tracker`}>
          <BackBtn> ← Back</BackBtn>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <div>
          <Card>
            <h2>
              Symbol : {info?.symbol} | Rank : {info?.rank}
            </h2>
          </Card>
          <span>{info?.description}</span>
          <Card>
            <h1>${priceinfo?.quotes.USD.price.toFixed(2)}</h1>
            <DateSpan>({time})</DateSpan>
          </Card>

          <TapContainer>
            <Tap isActive={chartMatch != null}>
              <Link to={`chart`}>
                <span style={{ padding: "10px 60px" }}>Chart</span>
              </Link>
            </Tap>
            <Tap isActive={priceMatch != null}>
              <Link to={`price`} state={priceinfo}>
                <span style={{ padding: "10px 60px" }}>Price</span>
              </Link>
            </Tap>
          </TapContainer>

          <Routes>
            <Route
              path="/chart"
              element={
                <Chart
                  coinId={coinId ? coinId : "Error"}
                  name={info ? info.name : "Error"}
                />
              }
            />
            <Route
              path="/price"
              element={
                <Price price={priceinfo} name={info ? info.name : "Error"} />
              }
            />
          </Routes>
        </div>
      )}
    </Container>
  );
}

export default Coin;
