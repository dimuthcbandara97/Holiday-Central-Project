import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import request from 'superagent';

// This method will insert data into the backoffice
function HotelAddToCart() {
  // destination
  const [destination, setDestination] = useState('');
  // check_in_date
  const [check_in_date, setCheckInDate] = useState('');
  // check_out_date
  const [check_out_date, setCheck_OutDate] = useState('');
  // star_rating
  const [star_rating, setStarRating] = useState('');
  // room_selection
  const [room_selection, setRoomSelection] = useState('');
  // board_basis
  const [board_basis, setBoardBasis] = useState('');
  // pricing
  const [pricing, setPricing] = useState('');
  // pool
  const [pool, setPool] = useState('');
  // kids_play_area
  const [kids_play_area, setKidsPlayArea] = useState('');
  // beach_access
  const [beach_access, setBeachAccess] = useState('');
  // agent_name
  const [agent_name, setAgentName] = useState('');
  // user_name
  const [user_name, setUserName] = useState('');
  // checkout_date
  const [checkout_date, setCheckoutDate] = useState('');
  // aditional_note
  const [aditional_note, setAdditionalNotice] = useState('');
  // user_email
  const [user_email, setUserEmail] = useState('');
  // suite : true
  const [suite, setSuite] = useState('');
  // deluxe true
  const [deluxe, setDeluxe] = useState('');
  // super_deluxe true
  const [super_deluxe, setSuperDeluxe] = useState('');
  // breakfast true
  const [breakfast, setBreakfast] = useState('');
  // bread true
  const [bread, setBread] = useState('');
  // full_board true
  const [full_board, setFullBoard] = useState('');



  const sendDataToAPI = () => {
    const data = new URLSearchParams();

    // destination
    data.append('destination', destination);
    // check_in_date
    data.append('check_in_date', check_in_date);
    // check_out_date
    data.append('check_out_date', check_out_date);
    // star_rating
    data.append('star_rating', star_rating);
    // room_selection
    data.append('room_selection', room_selection);
    // board_basis
    data.append('board_basis', board_basis);
    // pricing
    data.append('pricing', pricing);
    // pool
    data.append('pool', pool);
    // kids_play_area
    data.append('kids_play_area', kids_play_area);
    // beach_access
    data.append('beach_access', beach_access);
    // agent_name
    data.append('agent_name', agent_name);
    // user_name
    data.append('user_name', user_name);
    // checkout_date
    data.append('checkout_date', checkout_date);
    // aditional_note
    data.append('aditional_note', aditional_note);
    // user_email
    data.append('user_email', user_email);
    // suite : true
    data.append('suite', suite);
    // deluxe true
    data.append('deluxe', deluxe);
    // super_deluxe true
    data.append('super_deluxe', super_deluxe);
    // breakfast true
    data.append('breakfast', breakfast);
    // bread true
    data.append('bread', bread);
    // full_board true
    data.append('full_board', full_board);



    request
      .post('http://localhost:4000/api/checkout/hotel')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .send(data)
      .then((response) => {
        console.log(response.body);

        // destination
        setDestination('');
        // check_in_date
        setCheckInDate('');
        // check_out_date
        setCheck_OutDate('');
        // star_rating
        setStarRating('');
        // room_selection
        setRoomSelection('');
        // board_basis
        setBoardBasis('');
        // pricing
        setPricing('');
        // pool
        setPool('');
        // kids_play_area
        setKidsPlayArea('');
        // beach_access
        setBeachAccess('');
        // agent_name
        setAgentName('');
        // user_name
        setUserName('');
        // checkout_date
        setCheckoutDate('');
        // aditional_note
        setAdditionalNotice('');
        // user_email
        setUserEmail('');
        // suite : true
        setSuite('');
        // deluxe true
        setDeluxe('');
        // super_deluxe true
        setSuperDeluxe('');
        // breakfast true
        setBreakfast('');
        // bread true
        setBread('');
        // full_board true
        setFullBoard('');

        alert('Data sent successfully')
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (


    <Form>
      {/* // destination */}
      <Form.Field>

        <label>destination</label>
        <input
          name="destination"
          onChange={(e) => setDestination(e.target.value)}
          placeholder="destination"
        />
      </Form.Field>

      {/* // check_in_date */}
      <Form.Field>

        <label>check_in_date</label>
        <input
          name="check_in_date"
          onChange={(e) => setCheckInDate(e.target.value)}
          placeholder="check_in_date"
        />
      </Form.Field>

      {/* // check_out_date */}
      <Form.Field>

        <label>check_out_datee</label>
        <input
          name="check_out_date"
          onChange={(e) => setCheck_OutDate(e.target.value)}
          placeholder="check_out_date"
        />
      </Form.Field>
      {/* // star_rating */}
      <Form.Field>

        <label>star_rating</label>
        <input
          name="star_rating"
          onChange={(e) => setStarRating(e.target.value)}
          placeholder="star_rating"
        />
      </Form.Field>
      {/* // room_selection */}
      <Form.Field>

        <label>room_selection</label>
        <input
          name="room_selection"
          onChange={(e) => setRoomSelection(e.target.value)}
          placeholder="room_selection"
        />
      </Form.Field>
      {/* // board_basis */}
      <Form.Field>

        <label>board_basis</label>
        <input
          name="board_basis"
          onChange={(e) => setBoardBasis(e.target.value)}
          placeholder="board_basis"
        />
      </Form.Field>
      {/* // pricing */}
      <Form.Field>

        <label>pricing</label>
        <input
          name="pricing"
          onChange={(e) => setPricing(e.target.value)}
          placeholder="pricing"
        />
      </Form.Field>
      {/* // pool */}
      <Form.Field>

        <label>pool</label>
        <input
          name="pool"
          onChange={(e) => setPool(e.target.value)}
          placeholder="pool"
        />
      </Form.Field>
      {/* // kids_play_area */}
      <Form.Field>

        <label>kids_play_area</label>
        <input
          name="kids_play_area"
          onChange={(e) => setKidsPlayArea(e.target.value)}
          placeholder="kids_play_area"
        />
      </Form.Field>
      {/* // beach_access */}
      <Form.Field>

        <label>beach_access</label>
        <input
          name="beach_access"
          onChange={(e) => setBeachAccess(e.target.value)}
          placeholder="beach_access"
        />
      </Form.Field>
      {/* // agent_name */}
      <Form.Field>

        <label>agent_name</label>
        <input
          name="agent_name"
          onChange={(e) => setAgentName(e.target.value)}
          placeholder="agent_name"
        />
      </Form.Field>
      {/* // user_name */}
      <Form.Field>

        <label>user_name</label>
        <input
          name="user_name"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="user_name"
        />
      </Form.Field>
      {/* // checkout_date */}
      <Form.Field>

        <label>checkout_date</label>
        <input
          name="checkout_date"
          onChange={(e) => setCheckoutDate(e.target.value)}
          placeholder="checkout_date"
        />
      </Form.Field>
      {/* // aditional_note */}
      <Form.Field>

        <label>aditional_note</label>
        <input
          name="aditional_note"
          onChange={(e) => setAdditionalNotice(e.target.value)}
          placeholder="aditional_note"
        />
      </Form.Field>
      {/* // user_email */}
      <Form.Field>

        <label>user_email</label>
        <input
          name="user_email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="user_email"
        />
      </Form.Field>
      {/* // suite : true */}
      <Form.Field>

        <label>suite</label>
        <input
          name="suite"
          onChange={(e) => setSuite(e.target.value)}
          placeholder="suite"
        />
      </Form.Field>
      {/* // deluxe true */}
      <Form.Field>

        <label>deluxe</label>
        <input
          name="deluxe"
          onChange={(e) => setDeluxe(e.target.value)}
          placeholder="deluxe"
        />
      </Form.Field>
      {/* // super_deluxe true */}
      <Form.Field>

        <label>super_deluxe</label>
        <input
          name="super_deluxe"
          onChange={(e) => setSuperDeluxe(e.target.value)}
          placeholder="super_deluxe"
        />
      </Form.Field>
      {/* // breakfast true */}
      <Form.Field>

        <label>breakfast</label>
        <input
          name="breakfast"
          onChange={(e) => setBreakfast(e.target.value)}
          placeholder="breakfast"
        />
      </Form.Field>

      {/* // bread true */}
      <Form.Field>

        <label>bread</label>
        <input
          name="bread"
          onChange={(e) => setBread(e.target.value)}
          placeholder="bread"
        />
      </Form.Field>
      {/* // full_board true */}
      <Form.Field>

        <label>full_board</label>
        <input
          name="full_board"
          onChange={(e) => setFullBoard(e.target.value)}
          placeholder="full_board"
        />
      </Form.Field>

      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>


  );
}

export default HotelAddToCart;
