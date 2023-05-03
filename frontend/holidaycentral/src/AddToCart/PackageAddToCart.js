import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import request from "superagent";
import HeaderAll from "../Components/HeaderAll";

// This method will insert data into the backoffice
function PackageAddToCart() {
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
  const [agent_name, setAgentName] = useState("");
  // user_name
  const [user_name, setUserName] = useState("");
  // user_email
  const [user_email, setUserEmail] = useState("");
  // checkout_date
  const [checkout_date, setCheckoutDate] = useState("");
  // aditional_note
  const [aditional_note, setAdditionalNotice] = useState("");
  // family_holiday
  const [family_holiday, setFamilyHoliday] = useState("");
  // wildlife_excursion
  const [wildlife_excursion, setWildlifeExcursion] = useState("");
  // beach_holiday
  const [beach_holiday, setBeachHoliday] = useState("");
  // honeymoon
  const [honeymoon, setHoneymoon] = useState("");

  const sendDataToAPI = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination);
    // speciality
    data.append("speciality", speciality);
    // duration
    data.append("duration", duration);
    // number_of_travellers
    data.append("number_of_travellers", number_of_travellers);
    // price
    data.append("price", price);
    // package_rating
    data.append("package_rating", package_rating);
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
      })
      .catch((error) => {
        console.log(error);
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
            />
          </Form.Field>

          {/* speciality */}
          <Form.Field className="form-field">
            <label>Speciality</label>
            <input
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </Form.Field>

          {/* duration */}
          <Form.Field className="form-field">
            <label>Duration</label>
            <input
              name="duration"
              onChange={(e) => setDurattion(e.target.value)}
            />
          </Form.Field>

          {/* number_of_travellers */}
          <Form.Field className="form-field">
            <label>No of Travellers</label>
            <input
              name="number_of_travellers"
              onChange={(e) => setNumberOfTravellers(e.target.value)}
            />
          </Form.Field>

          {/* price */}
          <Form.Field className="form-field">
            <label>Price</label>
            <input name="price" onChange={(e) => setPrice(e.target.value)} />
          </Form.Field>

          {/* package_rating */}
          <Form.Field className="form-field">
            <label>Package Rating</label>
            <input
              name="package_rating"
              onChange={(e) => setPackageRating(e.target.value)}
            />
          </Form.Field>

          {/* agent_name */}
          <Form.Field className="form-field">
            <label>Agent Name</label>
            <input
              name="agent_name"
              onChange={(e) => setAgentName(e.target.value)}
            />
          </Form.Field>

          {/* user_name */}
          <Form.Field className="form-field">
            <label>User Name</label>
            <input
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Field>

          {/* user_email */}
          <Form.Field className="form-field">
            <label>User Email</label>
            <input
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Field>

          {/* checkout_date */}
          <Form.Field className="form-field">
            <label>Checkout Date</label>
            <input
              name="checkout_date"
              onChange={(e) => setCheckoutDate(e.target.value)}
            />
          </Form.Field>

          {/* aditional_note */}
          <Form.Field className="form-field">
            <label>Aditional Note</label>
            <input
              name="aditional_note"
              onChange={(e) => setAdditionalNotice(e.target.value)}
            />
          </Form.Field>

          {/* family_holiday */}
          <Form.Field className="form-field">
            <label>Family Holiday</label>
            <input
              name="family_holiday"
              onChange={(e) => setFamilyHoliday(e.target.value)}
            />
          </Form.Field>

          {/* wildlife_excursion */}
          <Form.Field className="form-field">
            <label>Wildlife Excursion</label>
            <input
              name="wildlife_excursion"
              onChange={(e) => setWildlifeExcursion(e.target.value)}
            />
          </Form.Field>

          {/* beach_holiday */}
          <Form.Field className="form-field">
            <label>Beach Holiday</label>
            <input
              name="beach_holiday"
              onChange={(e) => setBeachHoliday(e.target.value)}
            />
          </Form.Field>

          {/* honeymoon */}
          <Form.Field className="form-field">
            <label>Honeymoon</label>
            <input
              name="honeymoon"
              onChange={(e) => setHoneymoon(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="form-submit">
            <Button type="submit" class="btn me-5">
              Add To Cart
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
            <Button type="submit" onClick={sendDataToAPI} class="btn ms-5">
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
