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
import PackageSelect from "./TravelAgents/TravelAgentBookPackage/PackageFilter";
import HotelSearch from "./Search/HotelSearch";
import PackageSearch from "./TravelAgents/TravelAgentBookPackage/TravelAgentBookPackages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestRoute from "./TravelAgents/TestRoute";
import LoginPage from "./LoginPAge/LoginPage";
import TravelAgentMenu from "./TravelAgents/TravelAgentsMenu";
import TravelAgentSelectFlight from "./TravelAgents/TravelAgentBookFlight/FlightFilter";
import BackofficeStaff from "./Components/BackofficeStaff/BackofficeStaff";
import BackofficeStaffFlight from "./Components/BackofficeStaff/Flights/FlightUpdate";
import BackofficeStaffHotel from "./Components/BackofficeStaff/Hotels/HotelUpdate";
import BackofficeStaffPackage from "./Components/BackofficeStaff/Packages/PackageUpdate";
import Admin from "./Components/Admin/Admin";
import AdminAddAgent from "./Components/Admin/AddNewAgent/AddNewAgent";
import AdminResetPass from "./Components/Admin/ResetPassword/ResetPassword";
import AdminViewAgent from "./Components/Admin/ViewAllAgents/ViewAllAgents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />}></Route>

          {/* Routes for Admin  */}
          {/* <Route path="/admin" element={<HotelAddToCart />}></Route> */}

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

          <Route path="/travel/dashboard/package" element={<PackageSearch />} />
          <Route
            path="/travel/dashboard/package/select"
            element={<PackageSelect />}
          />
          <Route
            path="/travel/dashboard/package/checkout"
            element={<PackageAddToCart />}
          />

          {/* Routes for BackofficeStaff */}

          <Route path="/backoffice/dashboard/" element={<BackofficeStaff />} />
          <Route
            path="/backoffice/dashboard/flight"
            element={<BackofficeStaffFlight />}
          />
          <Route
            path="/backoffice/dashboard/hotel"
            element={<BackofficeStaffHotel />}
          />
          <Route
            path="/backoffice/dashboard/package"
            element={<BackofficeStaffPackage />}
          />

          {/* Routes for Admin */}

          <Route path="/admin/dashboard/" element={<Admin />} />
          <Route path="/admin/dashboard/add" element={<AdminAddAgent />} />
          <Route path="/admin/dashboard/reset" element={<AdminResetPass />} />
          <Route path="/admin/dashboard/view" element={<AdminViewAgent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
