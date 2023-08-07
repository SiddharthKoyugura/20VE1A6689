import { useEffect, useState } from "react"
import Table from "../components/Table";


export default function Home() {
  const [ data, setData ] = useState([]);
  
  useEffect(()=>{
    const fetchData = async () => {
      console.log("Hello");
      const response = await fetch("http://127.0.0.1:5000/getAllTrains");
      const data = await response.json();
      console.log("Data:", data);
      setData(data);
    }
    if(data.length<1){
      fetchData();
    }
  }, []);

  return <div>
    {
      data.length >= 1
      ? <Table tableData={data}/>
      : <h1>HEllo</h1>
    }
  </div>
}
