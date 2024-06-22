import { fetchStockData } from "@/functions/fetchStockData";

interface StockData {
  id: string;
  class: string;
  exchange: string;
  symbol: string;
  name: string;
  status: string;
  tradable: boolean;
  marginable: boolean;
  maintenance_margin_requirement: number;
  shortable: boolean;
  easy_to_borrow: boolean;
  additional_features: string[];
}

const formatStockData = (data: StockData) => (
  <div>
    {Object.entries(data).map(([key, value]) => (
      <div key={key}>
        <strong>{key.replace(/_/g, " ")}:</strong>{" "}
        {Array.isArray(value) ? value.join(", ") : value.toString()}
      </div>
    ))}
  </div>
);

export default async function Home() {
  const data: StockData = await fetchStockData("AAPL");

  return (
    <div>
      <div>Home</div>
      <div>Stock Data: {formatStockData(data)}</div>
    </div>
  );
}
