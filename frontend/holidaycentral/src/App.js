import useFetch from "./hooks/useFetch";
import FlightSearch from "./Search/FlightSearch";
import TravelAgentBookFlight from "./TravelAgents/TravelAgentBookFlight/TravelAgentBookFlight";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TravelAgentBookHotel from "./TravelAgents/TravelAgentBookHotel/TravelAgentBookHotel";
import Create from "./AddDataManual/BackofficeAdmin/create";
import FlightAddToCart from "./AddToCart/FlightAddToCart";
import HotelAddToCart from "./AddToCart/HotelAddToCart";
import HotelSelect from "./TravelAgents/TravelAgentBookHotel/FilterHotel";
import PackageAddToCart from "./AddToCart/PackageAddToCart";
import HotelSearch from "./Search/HotelSearch";
import PackageSearch from "./Search/PackageSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestRoute from "./TravelAgents/TestRoute";
import LoginPage from "./LoginPAge/LoginPage";
import TravelAgentMenu from "./TravelAgents/TravelAgentsMenu";
import TravelAgentSelectFlight from "./TravelAgents/TravelAgentBookFlight/FlightFilter";

function App() {
  return (
    <div className="App">
      {/* <FlightSearch/> */}
      {/* <HotelSearch/> */}
      {/* <PackageSearch/> */}
      {/* <TravelAgentBookFlight/> */}
      {/* <TravelAgentBookHotel/> */}
      {/* <Create/>
       */}
      {/* <FlightAddToCart/> */}
      {/* <HotelAddToCart/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>

          {/* Routes for Admin  */}
          <Route path="/admin" element={<HotelAddToCart />}></Route>

          <Route path="/admin/dashboard/:id" element={<TestRoute />}></Route>

          {/* Routes for Travel Agent  */}
          <Route path="/travel/dashboard" element={<TravelAgentMenu />}></Route>

          <Route
            path="/travel/dashboard/flight"
            element={<TravelAgentBookFlight />}
          />
          <Route
            path="/travel/dashboard/flight/select"
            element={<TravelAgentSelectFlight />}
          />
          <Route
            path="/travel/dashboard/flight/checkout"
            element={<FlightAddToCart />}
          />

          <Route path="/travel/dashboard/hotel" element={<HotelSearch />} />

          <Route
            path="/travel/dashboard/hotel/select"
            element={<HotelSelect />}
          />
          <Route
            path="/travel/dashboard/hotel/checkout"
            element={<HotelAddToCart />}
          />

          <Route
            path="/travel/dashboard/package"
            element={<TravelAgentBookFlight />}
          />
          <Route
            path="/travel/dashboard/package/select"
            element={<TravelAgentSelectFlight />}
          />
          <Route
            path="/travel/dashboard/package/checkout"
            element={<FlightAddToCart />}
          />

          {/* Routes for BackofficeAdmin */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
