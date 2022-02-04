import { useOutletContext } from "react-router-dom";
import { Overview, OverviewItem } from "./Coin";
import styled from "styled-components";

interface PriceProps {
  tickersData: {
    quotes: {
      USD: {
        price: number;
        percent_change_24h: number;
      };
    };
  };
}

const Up = styled.span`
  color: red;
`;

const Down = styled.span`
  color: blue;
`;

function Price() {
  const { tickersData } = useOutletContext<PriceProps>();
  const priceflow = tickersData.quotes.USD.percent_change_24h;

  return (
    <Overview>
      <OverviewItem>
        <span>PRICE</span>
        <span>{`$ ${tickersData.quotes.USD.price}`}</span>
      </OverviewItem>
      <OverviewItem>
        <span>COMPARE TO YESTERDAY</span>
        {priceflow < 0 ? <Down>{priceflow}%</Down> : <Up>{priceflow}%</Up>}
      </OverviewItem>
    </Overview>
  );
}

export default Price;
