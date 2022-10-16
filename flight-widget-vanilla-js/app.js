const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
  },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
  }, 
  {
    time: "13:21",
    destination: "LOS-ANGELES",
    flight: "DBX 200",
    gate: "B 19",
    remarks: "LATE"
  }
];

function populateFlight() {
  for (const flight of flights){
    const tableRow = document.createElement("tr");
    for(flightDetails in flight){
      const tableCell = document.createElement("td");
      const words = Array.from(flight[flightDetails]);
      for(const [index, letter] of words.entries()){
        const letterElement = document.createElement("div");
        setTimeout(()=>{
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 150 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateFlight();