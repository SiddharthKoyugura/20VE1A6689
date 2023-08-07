const Table = (props) => {
  const { tableData } = props;
    console.log("data", tableData);
  return (
    <div>
      <table className="w-full overflox-hidden text-center text-sm font-light">
        <thead className="border border-neutral-700 bg-neutral-800 text-neutral-50 font-medium">
          <tr>
            <th>Train Name</th>
            <th>Train Number</th>
            <th>AC Price</th>
            <th>SL Price</th>
            <th>AC Tickets</th>
            <th>SL Tickets</th>
            <th>departureTime</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            const departureTime = item.departureTime;
            const delayedTime = item.delayedBy;
            let hours = departureTime.Hours;
            let minutes = departureTime.Minutes;
            minutes += delayedTime;
            if (minutes > 60) hours += 1;
            return (
              <tr key={index}>
                <td>{item.trainName}</td>
                <td>{item.trainNumber} </td>
                <td>{`Rs.${item.price.AC}`} </td>
                <td>{`Rs.${item.price.sleeper}`} </td>
                <td>{item.seatsAvailable.AC}</td>
                <td>{item.seatsAvailable.sleeper}</td>
                <td>{hours + ":" + minutes} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
