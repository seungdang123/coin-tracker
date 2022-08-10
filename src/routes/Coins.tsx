import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { Helmet } from "react-helmet";

const Container = styled.div`
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
const CoinsList = styled.ul``;
const Coin = styled.li`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.boxColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  border-radius: 15px;

  a {
    padding: 20px;
    display: flex;
    transition: all 0.1s ease-in-out;
    align-items: center;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const CoinLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const DarkMode = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  right: 30px;
  color: ${(props) => props.theme.bulbColor};
  font-size: 20px;
  cursor: pointer;
  border-radius: 15px;
  padding: 20px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.borderColor};
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 30));
      setLoading(false);
    })();
  }, []);

  const faPropIcon = faLightbulb as IconProp;

  return (
    <Container>
      <Helmet>
        <title>Crypto Tracker</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
        <DarkMode onClick={() => setIsDark((prev) => !prev)}>
          <FontAwesomeIcon icon={faPropIcon} />
        </DarkMode>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <CoinLogo
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;{" "}
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
