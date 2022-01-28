import { useOutletContext } from "react-router-dom";
import { Overview, OverviewItem } from "./Coin";

interface PriceProps {
  tickersData: {
    quotes: {
      USD: {
        price: number;
        percent_change_12h: number;
      };
    };
  };
}

function Price() {
  const { tickersData } = useOutletContext<PriceProps>();
  return (
    <Overview>
      <OverviewItem>
        <span>PRICE</span>
        <span>{`$ ${tickersData.quotes.USD.price}`}</span>
      </OverviewItem>
      <OverviewItem>
        <span>PERCENT CHANGE(12H)</span>
        <span>{`${tickersData.quotes.USD.percent_change_12h}%`}</span>
      </OverviewItem>
    </Overview>
  );
}

export default Price;
