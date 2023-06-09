import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import request from "superagent";
import HeaderAll from "../../Headers/HeaderAll";
import { useLocation } from "react-router-dom";
import "./styles.css";
// import Cookies from 'js-cookie';
import Cookies from "universal-cookie";
const cookies = new Cookies();

// This method will insert data into the backoffice
function FlightAddToCart() {
  const departure_destination2 = cookies.get("departure_destinationFlight");
  const arrival_destination2 = cookies.get("arrival_destinationFlight");
  const departure_date2 = cookies.get("departure_dateFlight");
  const arrival_date2 = cookies.get("arrival_dateFlight");
  const cabin_class2 = cookies.get("cabin_classFlight");
  const price2 = cookies.get("priceFlight");
  const duration2 = cookies.get("durationFlight");
  const airline2 = cookies.get("airlineFlight");

  console.log(
    departure_destination2 +
      ": " +
      arrival_destination2 +
      ": " +
      departure_date2 +
      ": " +
      arrival_date2 +
      ": " +
      cabin_class2 +
      ": " +
      price2 +
      ": " +
      duration2 +
      ": " +
      airline2
  );

  // "departure_destination",
  const [departure_destination, setDepartureDestination] = useState("");
  // "arrival_destination",
  const [arrival_destination, setArrivalDestination] = useState("");
  // "departure_date",
  const [departure_date, setDepartureDate] = useState("");
  // "arrival_date",
  const [arrival_date, setArrivalDate] = useState("");
  // "cabin_class",
  const [cabin_class, setCabinClass] = useState("");
  // "duration",
  const [duration, setDuration] = useState("");
  // "price",
  const [price, setPrice] = useState("");
  // "airline",
  const [airline, setAirline] = useState("");
  // "agent_name",
  const [agent_name, setAgentName] = useState("");
  // "user_name",
  const [user_name, setUserName] = useState("");
  // "user_email",
  const [user_email, setUserEmail] = useState("");
  // "checkout_date",
  const [checkout_date, setCheckoutDate] = useState("");
  // "additional_note",
  const [additional_note, setAdditionalNotice] = useState("");
  // middle
  const [middle, setMiddleAmount] = useState("");
  // isle
  const [isle, setIsle] = useState("");
  // widow
  const [widow, setWidow] = useState("");
  // basic
  const [basic, setBasic] = useState("");
  // indian
  const [indian, setIndian] = useState("");
  // sri_lankan
  const [sri_lankan, setSriLankan] = useState("");
  // italian
  const [italian, setItalian] = useState("");

  // Direct Booking of the Flights
  const sendDataToAPI = () => {
    const data = new URLSearchParams();
    // Departure Destination
    data.append("departure_destination", departure_destination2);
    // Arrival Destination
    data.append("arrival_destination", arrival_destination2);
    // Departure Date
    data.append("departure_date", departure_date2);
    // Arrival Date
    data.append("arrival_date", arrival_date2);
    // Cabin Class
    data.append("cabin_class", cabin_class2);
    // Duration
    data.append("duration", duration2);
    {
      /* // "price", */
    }
    data.append("price", price2);
    {
      /* // "airline", */
    }
    data.append("airline", airline2);
    {
      /* // "agent_name", */
    }
    data.append("agent_name", agent_name);
    {
      /* // "user_name", */
    }
    data.append("user_name", user_name);
    {
      /* // "user_email", */
    }
    data.append("user_email", user_email);
    {
      /* // "checkout_date", */
    }
    data.append("checkout_date", checkout_date);
    {
      /* // "additional_note", */
    }
    data.append("additional_note", additional_note);

    // middle
    data.append("middle", middle);
    // isle
    data.append("isle", isle);
    // widow
    data.append("widow", widow);
    // basic
    data.append("basic", basic);
    // indian
    data.append("indian", indian);
    // sri_lankan
    data.append("sri_lankan", sri_lankan);
    // italian
    data.append("italian", italian);

    // const cookies = document.cookie.split(";"); // Get all cookies as an array of strings

    // cookies.forEach(cookie => {
    //   const [name, value] = cookie.trim().split("="); // Split cookie into name and value
    //   console.log(`${name}: ${value}`); // Print cookie name and value
    // });

    request
      .post("http://localhost:4000/api/checkout/flight")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        setDepartureDestination("");
        setArrivalDestination("");
        setDepartureDate("");
        setArrivalDate("");
        setCabinClass("");
        setDuration("");
        setPrice("");
        setAirline("");
        setAgentName("");
        setUserName("");
        setUserEmail("");
        setCheckoutDate("");
        setAdditionalNotice("");
        setMiddleAmount("");
        setIsle("");
        setWidow("");
        setBasic("");
        setIndian("");
        setSriLankan("");
        setItalian("");
        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!");
      });
  };

  // Add an Item to the Cart
  const sendDataToCart = () => {
    const data = new URLSearchParams();
    // Departure Destination
    data.append("departure_destination", departure_destination2);
    // Arrival Destination
    data.append("arrival_destination", arrival_destination2);
    // Departure Date
    data.append("departure_date", departure_date2);
    // Arrival Date
    data.append("arrival_date", arrival_date2);
    // Cabin Class
    data.append("cabin_class", cabin_class2);
    // Duration
    data.append("duration", duration2);
    {
      /* // "price", */
    }
    data.append("price", price2);
    {
      /* // "airline", */
    }
    data.append("airline", airline2);
    {
      /* // "agent_name", */
    }
    data.append("agent_name", agent_name);
    {
      /* // "user_name", */
    }
    data.append("user_name", user_name);
    {
      /* // "user_email", */
    }
    data.append("user_email", user_email);
    {
      /* // "checkout_date", */
    }
    data.append("checkout_date", checkout_date);
    {
      /* // "additional_note", */
    }
    data.append("additional_note", additional_note);

    // middle
    data.append("middle", middle);
    // isle
    data.append("isle", isle);
    // widow
    data.append("widow", widow);
    // basic
    data.append("basic", basic);
    // indian
    data.append("indian", indian);
    // sri_lankan
    data.append("sri_lankan", sri_lankan);
    // italian
    data.append("italian", italian);

    request
      .post("http://localhost:4000/api/cart/flight")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        setDepartureDestination("");
        setArrivalDestination("");
        setDepartureDate("");
        setArrivalDate("");
        setCabinClass("");
        setDuration("");
        setPrice("");
        setAirline("");
        setAgentName("");
        setUserName("");
        setUserEmail("");
        setCheckoutDate("");
        setAdditionalNotice("");
        setMiddleAmount("");
        setIsle("");
        setWidow("");
        setBasic("");
        setIndian("");
        setSriLankan("");
        setItalian("");
        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!");
      });
  };
  return (
    <>
      <HeaderAll />
      {/* <p>{airline2}</p> */}
      <div class="display-5 fw-bold p-3 m-3">Summary of Details</div>
      <div class="container p-3 m-3 border rounded">
        <Form>
          <Form.Field className="form-field ">
            <label>Departure Destination</label>
            <input
              name="departure_destination"
              onChange={(e) => setDepartureDestination(e.target.value)}
              placeholder={departure_destination2}
              readOnly
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>Arrival Destination</label>
            <input
              name="arrival_destination"
              onChange={(e) => setArrivalDestination(e.target.value)}
              placeholder={arrival_destination2}
              readOnly
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>Departure Date</label>
            <input
              name="departure_date"
              onChange={(e) => setDepartureDate(e.target.value)}
              placeholder={departure_date2}
              readOnly
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>Arrival Date</label>
            <input
              // type="date"
              name="arrival_date"
              onChange={(e) => setArrivalDate(e.target.value)}
              placeholder={arrival_date2}
              readOnly
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>Cabin Class</label>
            <input
              name="cabin_class"
              onChange={(e) => setCabinClass(e.target.value)}
              readOnly
              placeholder={cabin_class2}
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>Duration</label>
            <input
              name="duration"
              onChange={(e) => setDuration(e.target.value)}
              readOnly
              placeholder={duration2}
            />
          </Form.Field>
          {/* // "price", */}
          <Form.Field className="form-field">
            <label>Price</label>
            <input
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              readOnly
              placeholder={price2}
            />
          </Form.Field>
          {/* // "airline", */}
          <Form.Field className="form-field">
            <label>Airline</label>
            <input
              name="airline"
              onChange={(e) => setAirline(e.target.value)}
              readOnly
              placeholder={airline2}
            />
          </Form.Field>
          {/* // "agent_name", */}
          <Form.Field className="form-field">
            <label>Agent Name</label>
            <input
              name="agent_name"
              onChange={(e) => setAgentName(e.target.value)}
              required
            />
          </Form.Field>
          {/* // "user_name", */}
          <Form.Field className="form-field">
            <label>User Name</label>
            <input
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Form.Field>
          {/* // "user_email", */}
          <Form.Field className="form-field">
            <label>User Email</label>
            <input
              type="email"
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </Form.Field>
          {/* // "checkout_date", */}
          <Form.Field className="form-field">
            <label>Checkout Date</label>
            <input
              type="date"
              name="checkout_date"
              onChange={(e) => setCheckoutDate(e.target.value)}
              required
            />
          </Form.Field>
          {/* // "additional_note", */}
          <Form.Field className="form-field">
            <label>Additional Note</label>
            <input
              name="additional_note"
              onChange={(e) => setAdditionalNotice(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Middle Seats</label>
            <input
              name="middle"
              onChange={(e) => setMiddleAmount(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field className="form-field">
            <label>No of Isle Seats</label>
            <input
              name="isle"
              onChange={(e) => setIsle(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Window Seats</label>
            <input
              name="widow"
              onChange={(e) => setWidow(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Basic Seats</label>
            <input
              name="basic"
              onChange={(e) => setBasic(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Indian Food Likees</label>
            <input
              name="indian"
              onChange={(e) => setIndian(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Sri Lankan Food Likees</label>
            <input
              name="sri_lankan"
              onChange={(e) => setSriLankan(e.target.value)}
              required
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>No of Italian Food Likees</label>
            <input
              name="italian"
              onChange={(e) => setItalian(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field className="form-submit">
            <Button type="submit" onClick={sendDataToCart} class="btn btn-dark">
              Add To Cart
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
          </Form.Field>
          <Form.Field className="form-submit">
            <Button type="submit" onClick={sendDataToAPI} class="btn btn-dark">
              Checkout
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
          </Form.Field>
        </Form>
      </div>
    </>
  );
}

export default FlightAddToCart;
