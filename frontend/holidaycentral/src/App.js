
import useFetch from './hooks/useFetch';
import FlightSearch from './Search/FlightSearch';
import TravelAgentBookFlight from'./TravelAgents/TravelAgentBookFlight/TravelAgentBookFlight'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TravelAgentBookHotel from './TravelAgents/TravelAgentBookHotel/TravelAgentBookHotel';
import Create from './AddDataManual/BackofficeAdmin/create'
import FlightAddToCart from './AddToCart/FlightAddToCart';
import HotelAddToCart from './AddToCart/HotelAddToCart';
import PackageAddToCart from './AddToCart/PackageAddToCart';

function App() {

  return (
    <div className="App">
      <FlightSearch/>
      {/* <TravelAgentBookFlight/> */}
      {/* <TravelAgentBookHotel/> */}
      {/* <Create/>
       */}
       {/* <FlightAddToCart/> */}
       {/* <HotelAddToCart/> */}
       {/* <PackageAddToCart/> */}
    </div>
  );
}

export default App;
