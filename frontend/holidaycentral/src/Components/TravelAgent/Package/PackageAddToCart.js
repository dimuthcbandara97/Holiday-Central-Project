import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import request from "superagent";
import HeaderAll from "../../Headers/HeaderAll";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// This method will insert data into the backoffice
function PackageAddToCart() {
  const agentEmail2 = cookies.get("agentEmail");
  const price2 = cookies.get("min_pricePackage");
  const package_rating2 = cookies.get("package_ratingPackage");
  const duration2 = cookies.get("durationPackage");
  const destination2 = cookies.get("destinationPackage");
  const number_of_travellers2 = cookies.get("number_of_travellersPackage");
  const speciality2 = cookies.get("specialityPackage");

  console.log(
    price2 +
      " " +
      package_rating2 +
      " " +
      duration2 +
      " " +
      destination2 +
      " " +
      number_of_travellers2 +
      " " +
      speciality2
  );

  // destination
  const [destination, setDestination] = useState("");
  // speciality
  const [speciality, setSpeciality] = useState("");
  // duration
  const [duration, setDurattion] = useState("");
  // number_of_travellers
  const [number_of_travellers, setNumberOfTravellers] = useState("");
  // price
  const [price, setPrice] = useState("");
  // package_rating
  const [package_rating, setPackageRating] = useState("");
  // agent_name
  const [agent_name, setAgentName] = useState(agentEmail2);
  // user_name
  const [user_name, setUserName] = useState(agentEmail2);
  // user_email
  const [user_email, setUserEmail] = useState("");
  // checkout_date
  const [checkout_date, setCheckoutDate] = useState("");
  // aditional_note
  const [aditional_note, setAdditionalNotice] = useState("");
  // family_holiday
  const [family_holiday, setFamilyHoliday] = useState("false");
  // wildlife_excursion
  const [wildlife_excursion, setWildlifeExcursion] = useState("false");
  // beach_holiday
  const [beach_holiday, setBeachHoliday] = useState("false");
  // honeymoon
  const [honeymoon, setHoneymoon] = useState("false");

  const sendDataToBooking = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination2);
    // speciality
    data.append("speciality", speciality2);
    // duration
    data.append("duration", duration2);
    // number_of_travellers
    data.append("number_of_travellers", number_of_travellers2);
    // price
    data.append("price", price2);
    // package_rating
    data.append("package_rating", package_rating2);
    // agent_name
    data.append("agent_name", agent_name);
    // user_name
    data.append("user_name", user_name);
    // user_email
    data.append("user_email", user_email);
    // checkout_date
    data.append("checkout_date", checkout_date);
    // aditional_note
    data.append("aditional_note", aditional_note);
    // family_holiday
    data.append("family_holiday", family_holiday);
    // wildlife_excursion
    data.append("wildlife_excursion", wildlife_excursion);
    // beach_holiday
    data.append("beach_holiday", beach_holiday);
    // honeymoon
    data.append("honeymoon", honeymoon);

    request
      .post("http://localhost:4000/api/checkout/package")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        // destination
        setDestination("");
        // speciality
        setSpeciality("");
        // duration
        setDurattion("");
        // number_of_travellers
        setNumberOfTravellers("");
        // price
        setPrice("");
        // package_rating
        setPackageRating("");
        // agent_name
        setAgentName("");
        // user_email
        setUserEmail("");
        // user_name
        setUserName("");
        // checkout_date
        setCheckoutDate("");
        // aditional_note
        setAdditionalNotice("");
        // family_holiday
        setFamilyHoliday("");
        // wildlife_excursion
        setWildlifeExcursion("");
        // beach_holiday
        setBeachHoliday("");
        // honeymoon
        setHoneymoon("");
        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!");
      });
  };

  const sendDataToCart = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination2);
    // speciality
    data.append("speciality", speciality2);
    // duration
    data.append("duration", duration2);
    // number_of_travellers
    data.append("number_of_travellers", number_of_travellers2);
    // price
    data.append("price", price2);
    // package_rating
    data.append("package_rating", package_rating2);
    // agent_name
    data.append("agent_name", agent_name);
    // user_name
    data.append("user_name", user_name);
    // user_email
    data.append("user_email", user_email);
    // checkout_date
    data.append("checkout_date", checkout_date);
    // aditional_note
    data.append("aditional_note", aditional_note);
    // family_holiday
    data.append("family_holiday", family_holiday);
    // wildlife_excursion
    data.append("wildlife_excursion", wildlife_excursion);
    // beach_holiday
    data.append("beach_holiday", beach_holiday);
    // honeymoon
    data.append("honeymoon", honeymoon);

    request
      .post("http://localhost:4000/api/cart/package")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        // destination
        setDestination("");
        // speciality
        setSpeciality("");
        // duration
        setDurattion("");
        // number_of_travellers
        setNumberOfTravellers("");
        // price
        setPrice("");
        // package_rating
        setPackageRating("");
        // agent_name
        setAgentName("");
        // user_email
        setUserEmail("");
        // user_name
        setUserName("");
        // checkout_date
        setCheckoutDate("");
        // aditional_note
        setAdditionalNotice("");
        // family_holiday
        setFamilyHoliday("");
        // wildlife_excursion
        setWildlifeExcursion("");
        // beach_holiday
        setBeachHoliday("");
        // honeymoon
        setHoneymoon("");
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

      <div class="display-5 fw-bold p-3 m-3">Summary of Details</div>
      <div class="container p-3 m-3 border rounded">
        <Form>
          {/* destination */}
          <Form.Field className="form-field">
            <label>Destination</label>
            <input
              name="destination"
              onChange={(e) => setDestination(e.target.value)}
              placeholder={destination2}
              readOnly
            />
          </Form.Field>

          {/* speciality */}
          <Form.Field className="form-field">
            <label>Speciality</label>
            <input
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
              placeholder={speciality2}
              readOnly
            />
          </Form.Field>

          {/* duration */}
          <Form.Field className="form-field">
            <label>Duration</label>
            <input
              name="duration"
              onChange={(e) => setDurattion(e.target.value)}
              placeholder={duration2}
              readOnly
            />
          </Form.Field>

          {/* number_of_travellers */}
          <Form.Field className="form-field">
            <label>No of Travellers</label>
            <input
              name="number_of_travellers"
              onChange={(e) => setNumberOfTravellers(e.target.value)}
              placeholder={number_of_travellers2}
              readOnly
            />
          </Form.Field>

          {/* price */}
          <Form.Field className="form-field">
            <label>Price</label>
            <input
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              placeholder={price2}
              readOnly
            />
          </Form.Field>

          {/* package_rating */}
          <Form.Field className="form-field">
            <label>Package Rating</label>
            <input
              placeholder={package_rating2}
              readOnly
              name="package_rating"
              onChange={(e) => setPackageRating(e.target.value)}
            />
          </Form.Field>

          {/* user_email */}
          <Form.Field className="form-field">
            <label>Agent Email</label>
            <input
              //placeholder={agentEmail2}
              required
              name="user_email"
              // value={agentEmail2}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Field>

          {/* checkout_date */}
          <Form.Field className="form-field">
            <label>Checkout Date</label>
            <input
              required
              type="date"
              name="checkout_date"
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </Form.Field>

          {/* aditional_note */}
          <Form.Field className="form-field">
            <label>Aditional Note</label>
            <input
              required
              name="aditional_note"
              onChange={(e) => setAdditionalNotice(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="form-submit">
            <Button type="submit" class="btn me-5" onClick={sendDataToCart}>
              Add To Cart
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
            <Button type="submit" onClick={sendDataToBooking} class="btn ms-5">
              Checkout
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
          </Form.Field>
        </Form>
      </div>
    </>
  );
}

export default PackageAddToCart;
