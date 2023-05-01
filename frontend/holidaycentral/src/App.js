import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import FlightSearch from './Flight Search/FlightSearch';
import TravelAgentBookFlight from'./TravelAgents/TravelAgentBookFlight/TravelAgentBookFlight'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const {data,loading,error} = useFetch("/api/hotel")

  console.log(data)
  return (
    <div className="App">
      {/* <FlightSearch/> */}
      <TravelAgentBookFlight/>
    </div>
  );
}

export default App;
