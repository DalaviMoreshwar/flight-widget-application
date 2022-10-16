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

const destination = ["INDIA", "DUBAI", "MONGOLIA", "NEW YORK", "FRANCE", "TOKIO"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

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

function generateRandomLatter(){
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(max){
  const numbers = "0123456789";
  if(max){
    const newNumbers = numbers.slice(0, max);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }
  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime(){
  let displayHour = hour;
  if(hour < 12){
    hour++;
  }

  if(hour >= 24){
    hour = 1;
    displayHour = hour;
  }

  if(hour < 10){
    displayHour = "0"+hour;
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffleUp(){
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destination[Math.floor(Math.random() * destination.length)],
    flight: generateRandomLatter() + generateRandomLatter() + " " + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLatter() + " " + generateRandomNumber() + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = "";
  populateFlight();
}

setInterval(shuffleUp, 9000)