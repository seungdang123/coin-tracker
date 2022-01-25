import { useParams } from "react-router-dom";

interface RouteParams {
  // Don't need to typing to string on react-router-dom v6
  // Type to string | undefined automatically on v6
  // coinId: string;
}

function Coin() {
  const { coinId } = useParams();
  console.log(coinId);
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
