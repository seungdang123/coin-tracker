import ApexChart from "react-apexcharts";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atom";
import { useRecoilValue } from "recoil";

interface IChart {
  coinId: string;
  name: string;
}

interface IDataFlow {
  close?: string;
  high?: string;
  low?: string;
  market_cap?: number;
  open?: string;
  time_close?: number;
  time_open?: number;
  volume?: string;
  error?: string;
}

async function getStatue(coinId: IChart) {
  await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.status);
}

function Chart({ coinId, name }: IChart) {
  const { isLoading, data } = useQuery<IDataFlow[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  const isDark = useRecoilValue(isDarkAtom);
  console.log(data?.length);

  return (
    <div>
      <Helmet>
        <title>{`${name} | Chart`} </title>
      </Helmet>
      {isLoading ? (
        "Loading chart..."
      ) : data?.length == undefined ? (
        <h1 style={{ fontSize: "17px", color: "crimson", marginTop: "30px" }}>
          Error !! Can't show chart :: Price data not found
        </h1>
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "price",
              data: data?.map((data) => {
                return [
                  data.time_close,
                  data.open,
                  data.high,
                  data.low,
                  data.close,
                ];
              }) as any,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "light" : "dark",
            },
            chart: {
              height: 600,
              width: 750,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
