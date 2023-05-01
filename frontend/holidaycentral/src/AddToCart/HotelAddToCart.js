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
const [pool, setPoo] = useState('');
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
data.append('name', name);
// board_basis
data.append('name', name);
// pricing
data.append('name', name);
// pool
data.append('name', name);
// kids_play_area
data.append('name', name);
// beach_access
data.append('name', name);
// agent_name
data.append('name', name);
// user_name
data.append('name', name);
// checkout_date
data.append('name', name);
// aditional_note
data.append('name', name);
// user_email
data.append('name', name);
// suite : true
data.append('name', name);
// deluxe true
data.append('name', name);
// super_deluxe true
data.append('name', name);
// breakfast true
data.append('name', name);
// bread true
data.append('name', name);
// full_board true
data.append('name', name);
    


    request
      .post('http://localhost:4000/api/backoffice')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        
        
        // destination
        setName('');
// check_in_date
setName('');
// check_out_date
setName('');
// star_rating
setName('');
// room_selection
setName('');
// board_basis
setName('');
// pricing
setName('');
// pool
setName('');
// kids_play_area
setName('');
// beach_access
setName('');
// agent_name
setName('');
// user_name
setName('');
// checkout_date
setName('');
// aditional_note
setName('');
// user_email
setName('');
// suite : true
setName('');
// deluxe true
setName('');
// super_deluxe true
setName('');
// breakfast true
setName('');
// bread true
setName('');
// full_board true
setName('');

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

<label>First Name</label>
<input
  name="name"
  onChange={(e) => setName(e.target.value)}
  placeholder="First Name"
/>
</Form.Field>

      {/* // check_in_date */}
      <Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // check_out_date */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // star_rating */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // room_selection */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // board_basis */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // pricing */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // pool */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // kids_play_area */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // beach_access */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // agent_name */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // user_name */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // checkout_date */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // aditional_note */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // user_email */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // suite : true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // deluxe true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // super_deluxe true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // breakfast true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
      
{/* // bread true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* // full_board true */}
<Form.Field>

        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>

      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>

    
  );
}

export default HotelAddToCart;
