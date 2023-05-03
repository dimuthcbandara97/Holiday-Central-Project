import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import request from "superagent";
import HeaderAll from "../Components/HeaderAll";

// This method will insert data into the backoffice
function HotelAddToCart() {
  // destination
  const [destination, setDestination] = useState("");
  // check_in_date
  const [check_in_date, setCheckInDate] = useState("");
  // check_out_date
  const [check_out_date, setCheck_OutDate] = useState("");
  // star_rating
  const [star_rating, setStarRating] = useState("");
  // room_selection
  const [room_selection, setRoomSelection] = useState("");
  // board_basis
  const [board_basis, setBoardBasis] = useState("");
  // pricing
  const [pricing, setPricing] = useState("");
  // pool
  const [pool, setPool] = useState("");
  // kids_play_area
  const [kids_play_area, setKidsPlayArea] = useState("");
  // beach_access
  const [beach_access, setBeachAccess] = useState("");
  // agent_name
  const [agent_name, setAgentName] = useState("");
  // user_name
  const [user_name, setUserName] = useState("");
  // checkout_date
  const [checkout_date, setCheckoutDate] = useState("");
  // aditional_note
  const [aditional_note, setAdditionalNotice] = useState("");
  // user_email
  const [user_email, setUserEmail] = useState("");
  // suite : true
  const [suite, setSuite] = useState("");
  // deluxe true
  const [deluxe, setDeluxe] = useState("");
  // super_deluxe true
  const [super_deluxe, setSuperDeluxe] = useState("");
  // breakfast true
  const [breakfast, setBreakfast] = useState("");
  // bread true
  const [bread, setBread] = useState("");
  // full_board true
  const [full_board, setFullBoard] = useState("");

  const sendDataToAPI = () => {
    const data = new URLSearchParams();

    // destination
    data.append("destination", destination);
    // check_in_date
    data.append("check_in_date", check_in_date);
    // check_out_date
    data.append("check_out_date", check_out_date);
    // star_rating
    data.append("star_rating", star_rating);
    // room_selection
    data.append("room_selection", room_selection);
    // board_basis
    data.append("board_basis", board_basis);
    // pricing
    data.append("pricing", pricing);
    // pool
    data.append("pool", pool);
    // kids_play_area
    data.append("kids_play_area", kids_play_area);
    // beach_access
    data.append("beach_access", beach_access);
    // agent_name
    data.append("agent_name", agent_name);
    // user_name
    data.append("user_name", user_name);
    // checkout_date
    data.append("checkout_date", checkout_date);
    // aditional_note
    data.append("aditional_note", aditional_note);
    // user_email
    data.append("user_email", user_email);
    // suite : true
    data.append("suite", suite);
    // deluxe true
    data.append("deluxe", deluxe);
    // super_deluxe true
    data.append("super_deluxe", super_deluxe);
    // breakfast true
    data.append("breakfast", breakfast);
    // bread true
    data.append("bread", bread);
    // full_board true
    data.append("full_board", full_board);

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
        setUserName("");
        // checkout_date
        setCheckoutDate("");
        // aditional_note
        setAdditionalNotice("");
        // user_email
        setUserEmail("");
        // suite : true
        setSuite("");
        // deluxe true
        setDeluxe("");
        // super_deluxe true
        setSuperDeluxe("");
        // breakfast true
        setBreakfast("");
        // bread true
        setBread("");
        // full_board true
        setFullBoard("");

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
          {/* // destination */}
          <Form.Field className="form-field">
            <label>Destination</label>
            <input
              required
              name="destination"
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Field>

          {/* // check_in_date */}
          <Form.Field className="form-field">
            <label>Check In Date</label>
            <input
              type="date"
              required
              name="check_in_date"
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </Form.Field>

          {/* // check_out_date */}
          <Form.Field className="form-field">
            <label>Check Out Date</label>
            <input
              type="date"
              required
              name="check_out_date"
              onChange={(e) => setCheck_OutDate(e.target.value)}
            />
          </Form.Field>
          {/* // star_rating */}
          <Form.Field className="form-field">
            <label>Start Rating</label>
            <input
              required
              name="star_rating"
              onChange={(e) => setStarRating(e.target.value)}
            />
          </Form.Field>
          {/* // room_selection */}
          <Form.Field className="form-field">
            <label>Room Selection</label>
            <input
              required
              name="room_selection"
              onChange={(e) => setRoomSelection(e.target.value)}
            />
          </Form.Field>
          {/* // board_basis */}
          <Form.Field className="form-field">
            <label>Board Basis</label>
            <input
              required
              name="board_basis"
              onChange={(e) => setBoardBasis(e.target.value)}
            />
          </Form.Field>
          {/* // pricing */}
          <Form.Field className="form-field">
            <label>Pricing</label>
            <input
              required
              name="pricing"
              onChange={(e) => setPricing(e.target.value)}
            />
          </Form.Field>
          {/* // pool */}
          <Form.Field className="form-field">
            <label>Pool</label>
            <input
              placeholder="true / false"
              required
              name="pool"
              onChange={(e) => setPool(e.target.value)}
            />
          </Form.Field>
          {/* // kids_play_area */}
          <Form.Field className="form-field">
            <label>Kids Play Area</label>
            <input
              placeholder="true / false"
              required
              name="kids_play_area"
              onChange={(e) => setKidsPlayArea(e.target.value)}
            />
          </Form.Field>
          {/* // beach_access */}
          <Form.Field className="form-field">
            <label>Beach Access</label>
            <input
              placeholder="true / false"
              required
              name="beach_access"
              onChange={(e) => setBeachAccess(e.target.value)}
            />
          </Form.Field>
          {/* // agent_name */}
          <Form.Field className="form-field">
            <label>Agent Name</label>
            <input
              required
              name="agent_name"
              onChange={(e) => setAgentName(e.target.value)}
            />
          </Form.Field>
          {/* // user_name */}
          <Form.Field className="form-field">
            <label>User Name</label>
            <input
              required
              name="user_name"
              onChange={(e) => setUserName(e.target.value)}
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
          {/* // user_email */}
          <Form.Field className="form-field">
            <label>User Email</label>
            <input
              required
              name="user_email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Field>
          {/* // suite : true */}
          <Form.Field className="form-field">
            <label>Suite</label>
            <input
              required
              name="suite"
              onChange={(e) => setSuite(e.target.value)}
              placeholder="true / false"
            />
          </Form.Field>
          {/* // deluxe true */}
          <Form.Field className="form-field">
            <label>Deluxe</label>
            <input
              required
              name="deluxe"
              onChange={(e) => setDeluxe(e.target.value)}
              placeholder="true / false"
            />
          </Form.Field>
          {/* // super_deluxe true */}
          <Form.Field className="form-field">
            <label>Super Deluxe</label>
            <input
              required
              name="super_deluxe"
              onChange={(e) => setSuperDeluxe(e.target.value)}
              placeholder="true / false"
            />
          </Form.Field>
          {/* // breakfast true */}
          <Form.Field className="form-field">
            <label>Breakfast</label>
            <input
              required
              name="breakfast"
              onChange={(e) => setBreakfast(e.target.value)}
              placeholder="true / false"
            />
          </Form.Field>

          {/* // bread true */}
          <Form.Field className="form-field">
            <label>Bread</label>
            <input
              required
              name="bread"
              onChange={(e) => setBread(e.target.value)}
              placeholder="true / false"
            />
          </Form.Field>
          {/* // full_board true */}
          <Form.Field className="form-field">
            <label>Full Board</label>
            <input
              required
              name="full_board"
              onChange={(e) => setFullBoard(e.target.value)}
              placeholder="true / false"
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
            <Button type="submit" class="btn me-5">
              Add To Cart
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
            <Button type="submit" onClick={sendDataToAPI} class="btn ms-5">
              Checkout
              {/* <span className="search-icon"> &#x1F50D;</span> */}
            </Button>
          </Form.Field>
          <Form.Field className="form-submit"></Form.Field>
        </Form>
      </div>
    </>
  );
}

export default HotelAddToCart;
