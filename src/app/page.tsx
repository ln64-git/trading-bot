import { fetchStockData } from "@/functions/fetchStockData";

export default async function Home() {
  // const data = await fetchStockData("appl");

  return (
    <div>
      <div>Home</div>
      {/* <div>Stock Data: {JSON.stringify(data)}</div> */}
    </div>
  );
}
