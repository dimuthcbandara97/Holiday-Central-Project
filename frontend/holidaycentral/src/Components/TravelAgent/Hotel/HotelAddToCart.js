import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import request from "superagent";
import HeaderAll from "../../Headers/HeaderAll";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// This method will insert data into the backoffice
function HotelAddToCart() {
  const agentEmail2 = cookies.get("agentEmail");
  const destination2 = cookies.get("destinationHotel");
  const check_in_date2 = cookies.get("check_in_dateHotel");
  const star_rating2 = cookies.get("ratingHotel");
  const pricing2 = cookies.get("min_priceHotel");
  const check_out_date2 = cookies.get("check_out_dateHotel");
  const facilities = cookies.get("facilitiesHotel");

  const poolFac = cookies.get("poolHotel");
  const playFac = cookies.get("playHotel");
  const beachFac = cookies.get("beachHotel");

  //Converter
  const poolAv = cookies.get("poolHotelTF");
  const playAv = cookies.get("playHotelTF");
  const beachAv = cookies.get("beachHotelTF");

  // destination
  const [destination, setDestination] = useState(destination2);
  // check_in_date
  const [check_in_date, setCheckInDate] = useState(check_in_date2);
  // check_out_date
  const [check_out_date, setCheck_OutDate] = useState(check_out_date2);
  // star_rating
  const [star_rating, setStarRating] = useState(star_rating2);
  // room_selection
  const [room_selection, setRoomSelection] = useState("");
  // board_basis
  const [board_basis, setBoardBasis] = useState("");
  // pricing
  const [pricing, setPricing] = useState(pricing2);
  // pool
  const [pool, setPool] = useState(poolAv);
  // kids_play_area
  const [kids_play_area, setKidsPlayArea] = useState(playAv);
  // beach_access
  const [beach_access, setBeachAccess] = useState(beachAv);
  // agent_name
  const [agent_name, setAgentName] = useState(agentEmail2);
  // user_name
  const [user_name, setUserName] = useState(agentEmail2);
  // checkout_date
  const [checkout_date, setCheckoutDate] = useState("");
  // aditional_note
  const [aditional_note, setAdditionalNotice] = useState("");
  // user_email
  const [user_email, setUserEmail] = useState("");
  // suite : true
  const [suite, setSuite] = useState("false");
  // deluxe true
  const [deluxe, setDeluxe] = useState("false");
  // super_deluxe true
  const [super_deluxe, setSuperDeluxe] = useState("false");
  // breakfast true
  const [breakfast, setBreakfast] = useState("false");
  // bread true
  const [bread, setBread] = useState("false");
  // full_board true
  const [full_board, setFullBoard] = useState("false");

  // // console.log(
  //   "Data : " +
  //     destination +
  //     check_in_date +
  //     check_out_date +
  //     star_rating +
  //     room_selection +
  //     board_basis +
  //     pricing +
  //     pool +
  //     kids_play_area +
  //     beach_access +
  //     user_email +
  //     user_name +
  //     checkout_date +
  //     aditional_note
  // );

  // const sendDataToAPI = () => {
  //   const data = new URLSearchParams();

  //   // destination
  //   data.append("destination", destination);
  //   // check_in_date
  //   data.append("check_in_date", check_in_date);
  //   // check_out_date
  //   data.append("check_out_date", check_out_date);
  //   // star_rating
  //   data.append("star_rating", star_rating);
  //   // room_selection
  //   data.append("room_selection", room_selection);
  //   // board_basis
  //   data.append("board_basis", board_basis);
  //   // pricing
  //   data.append("pricing", pricing);
  //   // pool
  //   data.append("pool", pool);
  //   // kids_play_area
  //   data.append("kids_play_area", kids_play_area);
  //   // beach_access
  //   data.append("beach_access", beach_access);
  //   // agent_name
  //   data.append("agent_name", agent_name);
  //   // user_name
  //   data.append("user_name", user_name);
  //   // checkout_date
  //   data.append("checkout_date", checkout_date);
  //   // aditional_note
  //   data.append("aditional_note", aditional_note);
  //   // user_email
  //   data.append("user_email", user_email);
  //   // suite : true
  //   data.append("suite", suite);
  //   // deluxe true
  //   data.append("deluxe", deluxe);
  //   // super_deluxe true
  //   data.append("super_deluxe", super_deluxe);
  //   // breakfast true
  //   data.append("breakfast", breakfast);
  //   // bread true
  //   data.append("bread", bread);
  //   // full_board true
  //   data.append("full_board", full_board);

  //   request
  //     .post("http://localhost:4000/api/checkout/hotel")
  //     .set("Content-Type", "application/x-www-form-urlencoded")
  //     .set("Access-Control-Allow-Origin", "*")
  //     .send(data)
  //     .then((response) => {
  //       console.log(response.body);

  //       // destination
  //       setDestination("");
  //       // check_in_date
  //       setCheckInDate("");
  //       // check_out_date
  //       setCheck_OutDate("");
  //       // star_rating
  //       setStarRating("");
  //       // room_selection
  //       setRoomSelection("");
  //       // board_basis
  //       setBoardBasis("");
  //       // pricing
  //       setPricing("");
  //       // pool
  //       setPool("");
  //       // kids_play_area
  //       setKidsPlayArea("");
  //       // beach_access
  //       setBeachAccess("");
  //       // agent_name
  //       setAgentName("");
  //       // user_name
  //       setUserName("");
  //       // checkout_date
  //       setCheckoutDate("");
  //       // aditional_note
  //       setAdditionalNotice("");
  //       // user_email
  //       setUserEmail("");
  //       // suite : true
  //       setSuite("");
  //       // deluxe true
  //       setDeluxe("");
  //       // super_deluxe true
  //       setSuperDeluxe("");
  //       // breakfast true
  //       setBreakfast("");
  //       // bread true
  //       setBread("");
  //       // full_board true
  //       setFullBoard("");

  //       alert("Data sent successfully");
  //       window.location = "http://localhost:3000/travel/dashboard";
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Unsuccessfull Atempt! Try again!");
  //     });
  // };

  const sendDataToCart = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination);
    // check_in_date
    data.append("check_in_date", check_in_date);
    // check_out_date
    data.append("check_out_date", check_out_date);
    // bill checkout_date
    data.append("checkout_date", checkout_date);
    // star_rating
    data.append("star_rating", star_rating);
    // room_selection
    data.append("room_selection", room_selection);
    // board_basis
    data.append("board_basis", board_basis);
    // pricing
    data.append("pricing", pricing);
    // pool
    data.append("pool", poolAv);
    // kids_play_area
    data.append("kids_play_area", playAv);
    // beach_access
    data.append("beach_access", beachAv);
    // agent_name
    data.append("agent_name", agent_name);
    // user_email
    data.append("user_email", user_email);
    // aditional_note
    data.append("aditional_note", aditional_note);

    console.log(data);

    request
      .post("http://localhost:4000/api/cart/hotel")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);

        // destination
        setDestination("");
        // check_in_date
        setCheckInDate("");
        // check_out_date
        setCheck_OutDate("");
        // star_rating
        setStarRating("");
        // room_selection
        setRoomSelection("");
        // board_basis
        setBoardBasis("");
        // pricing
        setPricing("");
        // pool
        setPool("");
        // kids_play_area
        setKidsPlayArea("");
        // beach_access
        setBeachAccess("");
        // agent_name
        setAgentName("");
        // user_name
        // setUserName("");
        // checkout_date
        setCheckoutDate("");
        // aditional_note
        setAdditionalNotice("");
        // user_email
        setUserEmail("");

        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!" + error);
      });
  };

  const sendDataToBook = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination);
    // check_in_date
    data.append("check_in_date", check_in_date);
    // check_out_date
    data.append("check_out_date", check_out_date);
    // bill checkout_date
    data.append("checkout_date", checkout_date);
    // star_rating
    data.append("star_rating", star_rating);
    // room_selection
    data.append("room_selection", room_selection);
    // board_basis
    data.append("board_basis", board_basis);
    // pricing
    data.append("pricing", pricing);
    // pool
    data.append("pool", poolAv);
    // kids_play_area
    data.append("kids_play_area", playAv);
    // beach_access
    data.append("beach_access", beachAv);
    // agent_name
    data.append("agent_name", agent_name);
    // user_email
    data.append("user_email", user_email);
    // aditional_note
    data.append("aditional_note", aditional_note);

    console.log(data);

    request
      .post("http://localhost:4000/api/checkout/hotel")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .set("Access-Control-Allow-Origin", "*")
      .send(data)
      .then((response) => {
        console.log(response.body);

        // destination
        setDestination("");
        // check_in_date
        setCheckInDate("");
        // check_out_date
        setCheck_OutDate("");
        // star_rating
        setStarRating("");
        // room_selection
        setRoomSelection("");
        // board_basis
        setBoardBasis("");
        // pricing
        setPricing("");
        // pool
        setPool("");
        // kids_play_area
        setKidsPlayArea("");
        // beach_access
        setBeachAccess("");
        // agent_name
        setAgentName("");
        // user_name
        // setUserName("");
        // checkout_date
        setCheckoutDate("");
        // aditional_note
        setAdditionalNotice("");
        // user_email
        setUserEmail("");

        alert("Data sent successfully");
        window.location = "http://localhost:3000/travel/dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull Atempt! Try again!" + error);
      });
  };

  return (
    <>
      <HeaderAll />
      <div class="display-5 fw-bold p-3 m-3">Summary of Details</div>
      <div class="container p-3 m-3 border rounded">
        <Form>
          {/* // destination */}
          <Form.Field className="form-field">
            <label>Destination</label>
            <input
              name="destination"
              onChange={(e) => setDestination(e.target.value)}
              placeholder={destination2}
              readOnly
            />
          </Form.Field>

          {/* // check_in_date */}
          <Form.Field className="form-field">
            <label>Check In Date</label>
            <input
              name="check_in_date"
              onChange={(e) => setCheckInDate(e.target.value)}
              placeholder={check_in_date2}
              readOnly
            />
          </Form.Field>

          {/* // check_out_date */}
          <Form.Field className="form-field">
            <label>Check Out Date</label>
            <input
              name="check_out_date"
              onChange={(e) => setCheck_OutDate(e.target.value)}
              placeholder={check_out_date2}
              readOnly
            />
          </Form.Field>
          {/* // star_rating */}
          <Form.Field className="form-field">
            <label>Star Rating</label>
            <input
              name="star_rating"
              onChange={(e) => setStarRating(e.target.value)}
              placeholder={star_rating2}
              readOnly
            />
          </Form.Field>
          {/* // room_selection */}
          <Form.Field className="form-field">
            <label>Room Selection</label>

            <select
              required
              name="room_selection"
              onChange={(e) => setRoomSelection(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value="deluxe">Deluxe</option>
              <option value="super_deluxe">Super Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </Form.Field>
          {/* // board_basis */}
          <Form.Field className="form-field">
            <label>Board Basis</label>

            <select
              required
              name="board_basis"
              onChange={(e) => setBoardBasis(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value="full_board">Full Board</option>
              <option value="bread_breakfast">Bread and Breakfast</option>
            </select>
          </Form.Field>
          {/* // pricing */}
          <Form.Field className="form-field">
            <label>Pricing $</label>
            <input
              name="pricing"
              onChange={(e) => setPricing(e.target.value)}
              placeholder={pricing2}
              readOnly
            />
          </Form.Field>
          {/* // pool */}
          <Form.Field className="form-field">
            <label>Pool</label>
            <input
              placeholder={poolFac}
              readOnly
              name="pool"
              onChange={(e) => setPool(e.target.value)}
            />
          </Form.Field>
          {/* // kids_play_area */}
          <Form.Field className="form-field">
            <label>Kids Play Area</label>
            <input
              placeholder={playFac}
              readOnly
              name="kids_play_area"
              onChange={(e) => setKidsPlayArea(e.target.value)}
            />
          </Form.Field>
          {/* // beach_access */}
          <Form.Field className="form-field">
            <label>Beach Access</label>
            <input
              placeholder={beachFac}
              readOnly
              name="beach_access"
              onChange={(e) => setBeachAccess(e.target.value)}
            />
          </Form.Field>

          {/* // user_email */}
          <Form.Field className="form-field">
            <label>User Email</label>
            <input
              required
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Field>
          {/* // aditional_note */}
          <Form.Field className="form-field">
            <label>Additional Notes</label>
            <input
              required
              name="aditional_note"
              onChange={(e) => setAdditionalNotice(e.target.value)}
            />
          </Form.Field>

          <Form.Field className="form-field">
            <label>Checkout Date(Billing Date You want to finalize) </label>
            <input
              required
              name="checkout_date"
              onChange={(e) => setCheckoutDate(e.target.value)}
              type="date"
            />
          </Form.Field>

          <Form.Field className="form-submit">
            <Button
              type="submit"
              class="btn mx-5 px-4"
              onClick={sendDataToCart}
            >
              Add To Cart
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
            <Button type="submit" onClick={sendDataToBook} class="btn ms-5">
              Checkout
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
          </Form.Field>
        </Form>
      </div>
    </>
  );
}

export default HotelAddToCart;
