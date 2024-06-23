export default async function Home() {
  console.log(process.env.ALPACA_PAPER_API_KEY);

  return (
    <div className="text-green-200  opacity-50 max-w-3xl w-full mx-auto">
      <div>Home</div>
      {/* <div>Stock Data: {formatStockData(data)}</div> */}
    </div>
  );
}
