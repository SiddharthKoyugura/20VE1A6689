export const sortOnPrices = (arrayData) => {
  for (let i = 0; i < arrayData.length - 1; i++) {
    for (let j = 0; j < arrayData.length - i - 1; j++) {
      if (arrayData[j].price.AC > arrayData[j + 1].price.AC) {
        // Swap the objects
        const temp = arrayData[j];
        arrayData[j] = arrayData[j + 1];
        arrayData[j + 1] = temp;
      }
    }
  }
  return arrayData;
};

export const sortOnTickets = (arrayData) => {
  for (let i = 0; i < arrayData.length - 1; i++) {
    for (let j = 0; j < arrayData.length - i - 1; j++) {
      if (arrayData[j].seatsAvailable.SL < arrayData[j + 1].seatsAvailable.SL) {
        // Swap the objects
        const temp = arrayData[j];
        arrayData[j] = arrayData[j + 1];
        arrayData[j + 1] = temp;
      }
    }
  }
  return arrayData;
};

export const sortOnDepartureTime = (arrayData) => {
    for (let i = 0; i < arrayData.length - 1; i++) {
        for (let j = 0; j < arrayData.length - i - 1; j++) {
          if(arrayData[j].departureTime.Hours == arrayData[j+1].departureTime.Hours){
            if(arrayData[j].departureTime.Minutes < arrayData[j+1].departureTime.Minutes){
                // Swap the objects
                const temp = arrayData[j];
                arrayData[j] = arrayData[j + 1];
                arrayData[j + 1] = temp;
            }
          }
          if (arrayData[j].departureTime.Hours < arrayData[j + 1].departureTime.Hours) {
            // Swap the objects
            const temp = arrayData[j];
            arrayData[j] = arrayData[j + 1];
            arrayData[j + 1] = temp;
          }
        }
      }
      return arrayData;
}