import { useEffect, useState } from "react";
import Table from "../components/Table";
import { sortOnPrices, sortOnTickets, sortOnDepartureTime } from "../utils";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Hello");
      const response = await fetch("http://127.0.0.1:5000/getAllTrains");
      const data = await response.json();
      console.log("Data:", data);
      setData(data);
    };
    if (data.length < 1) {
      fetchData();
    }
  }, []);

  const sortedPriceData = sortOnPrices([...data]);
  const sortedTicketsData = sortOnTickets([...data]);
  const sortedDepartureData = sortOnDepartureTime([...data]);

  return (
    <div>
      {data.length >= 1 ? (
        <>
          <h1 className="text-[2rem] font-semibold w-fit mx-auto my-4">Raw Data(without sorted)</h1>
          <Table tableData={data} />
          <h1 className="text-[2rem] font-semibold w-fit mx-auto my-4">Order by Price</h1>
          <Table tableData={sortedPriceData} />
          <h1 className="text-[2rem] font-semibold w-fit mx-auto my-4">Order by max Seats available</h1>
          <Table tableData={sortedTicketsData} />
          <h1 className="text-[2rem] font-semibold w-fit mx-auto my-4">Order by max Departure Time</h1>
          <Table tableData={sortedDepartureData} />
        </>
      ) : (
        <h1>HEllo</h1>
      )}
    </div>
  );
}
