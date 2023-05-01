import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import request from 'superagent';

// This method will insert data into the backoffice
function FlightAddToCart() {
  // "departure_destination",
  const [departure_destination, setDepartureDestination] = useState('');
  // "arrival_destination",
  const [arrival_destination, setArrivalDestination] = useState('');
  // "departure_date",
  const [departure_date, setDepartureDate] = useState('');
  // "arrival_date",
  const [arrival_date, setArrivalDate] = useState('');
  // "cabin_class",
  const [cabin_class, setCabinClass] = useState('');
  // "duration",
  const [duration, setDuration] = useState('');
  // "price",
  const [price, setPrice] = useState('');
  // "airline",
  const [airline, setAirline] = useState('');
  // "agent_name",
  const [agent_name, setAgentName] = useState('');
  // "user_name",
  const [user_name, setUserName] = useState('');
  // "user_email",
  const [user_email, setUserEmail] = useState('');
  // "checkout_date",
  const [checkout_date, setCheckoutDate] = useState('');
  // "additional_note",
  const [additional_note, setAdditionalNotice] = useState('');
  // middle
  const [middle, setMiddleAmount] = useState('');
  // isle
  const [isle, setIsle] = useState('');
  // widow
  const [widow, setWidow] = useState('');
  // basic
  const [basic, setBasic] = useState('');
  // indian
  const [indian, setIndian] = useState('');
  // sri_lankan
  const [sri_lankan, setSriLankan] = useState('');
  // italian
  const [italian, setItalian] = useState('');


  const sendDataToAPI = () => {
    const data = new URLSearchParams();
    // Departure Destination
    data.append('departure_destination', departure_destination);
    // Arrival Destination
    data.append('arrival_destination', arrival_destination);
    // Departure Date
    data.append('departure_date', departure_date);
    // Arrival Date 
    data.append('arrival_date', arrival_date);
    // Cabin Class
    data.append('cabin_class', cabin_class);
    // Duration 
    data.append('duration', duration);
    {/* // "price", */ }
    data.append('price', price);
    {/* // "airline", */ }
    data.append('airline', airline);
    {/* // "agent_name", */ }
    data.append('agent_name', agent_name);
    {/* // "user_name", */ }
    data.append('user_name', user_name);
    {/* // "user_email", */ }
    data.append('user_email', user_email);
    {/* // "checkout_date", */ }
    data.append('checkout_date', checkout_date);
    {/* // "additional_note", */ }
    data.append('additional_note', additional_note);

    // middle
    data.append('middle', middle);
    // isle
    data.append('isle', isle);
    // widow
    data.append('widow', widow);
    // basic
    data.append('basic', basic);
    // indian
    data.append('indian', indian);
    // sri_lankan
    data.append('sri_lankan', sri_lankan);
    // italian
    data.append('italian', italian);

    request
      .post('http://localhost:4000/api/checkout/flight')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        setDepartureDestination('');
        setArrivalDestination('');
        setDepartureDate('');
        setArrivalDate('');
        setCabinClass('');
        setDuration('');
        setPrice('');
        setAirline('')
        setAgentName('')
        setUserName('');
        setUserEmail('');
        setCheckoutDate('')
        setAdditionalNotice('')
        setMiddleAmount('');
        setIsle('');
        setWidow('');
        setBasic('');
        setIndian('');
        setSriLankan('')
        setItalian('');
        alert('Data sent successfully')
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (
    <Form>
      <Form.Field>
        <label>Departure Destination</label>
        <input
          name="departure_destination"
          onChange={(e) => setDepartureDestination(e.target.value)}
          placeholder="Enter Departure"
        />
      </Form.Field>

      <Form.Field>
        <label>Arrival Destination</label>
        <input
          name="arrival_destination"
          onChange={(e) => setArrivalDestination(e.target.value)}
          placeholder="Email Arrival"
        />
      </Form.Field>
      <Form.Field>
        <label>Departure Date</label>
        <input
          name="departure_date"
          onChange={(e) => setDepartureDate(e.target.value)}
          placeholder="Departure Date"
        />
      </Form.Field>
      <Form.Field>
        <label>Arrival Date</label>
        <input
          name="arrival_date"
          onChange={(e) => setArrivalDate(e.target.value)}
          placeholder="Arrival Date"
        />
      </Form.Field>
      <Form.Field>
        <label>Cabin Class</label>
        <input
          name="cabin_class"
          onChange={(e) => setCabinClass(e.target.value)}
          placeholder="Cabin Class"
        />
      </Form.Field>
      <Form.Field>
        <label>Duration</label>
        <input
          name="duration"
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Set Duration"
        />
      </Form.Field>
      {/* // "price", */}
      <Form.Field>
        <label>Price</label>
        <input
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </Form.Field>
      {/* // "airline", */}
      <Form.Field>
        <label>Airline</label>
        <input
          name="airline"
          onChange={(e) => setAirline(e.target.value)}
          placeholder="Airline"
        />
      </Form.Field>
      {/* // "agent_name", */}
      <Form.Field>
        <label>Agent Name</label>
        <input
          name="agent_name"
          onChange={(e) => setAgentName(e.target.value)}
          placeholder="Agent Name"
        />
      </Form.Field>
      {/* // "user_name", */}
      <Form.Field>
        <label>User Name</label>
        <input
          name="user_name"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
        />
      </Form.Field>
      {/* // "user_email", */}
      <Form.Field>
        <label>User Email</label>
        <input
          name="user_email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="User Email"
        />
      </Form.Field>
      {/* // "checkout_date", */}
      <Form.Field>
        <label>checkout_date</label>
        <input
          name="checkout_date"
          onChange={(e) => setCheckoutDate(e.target.value)}
          placeholder="checkout_date"
        />
      </Form.Field>
      {/* // "additional_note", */}
      <Form.Field>
        <label>additional_note</label>
        <input
          name="additional_note"
          onChange={(e) => setAdditionalNotice(e.target.value)}
          placeholder="additional_note"
        />
      </Form.Field>

      <Form.Field>
        <label>middlee</label>
        <input
          name="middle"
          onChange={(e) => setMiddleAmount(e.target.value)}
          placeholder="middle"
        />
      </Form.Field>
      <Form.Field>
        <label>isle</label>
        <input
          name="isle"
          onChange={(e) => setIsle(e.target.value)}
          placeholder="isle"
        />
      </Form.Field>

      <Form.Field>
        <label>widow</label>
        <input
          name="widow"
          onChange={(e) => setWidow(e.target.value)}
          placeholder="widow"
        />
      </Form.Field>

      <Form.Field>
        <label>abasic</label>
        <input
          name="basic"
          onChange={(e) => setBasic(e.target.value)}
          placeholder="basic"
        />
      </Form.Field>

      <Form.Field>
        <label>indian</label>
        <input
          name="indian"
          onChange={(e) => setIndian(e.target.value)}
          placeholder="indian"
        />
      </Form.Field>

      <Form.Field>
        <label>sri_lankan</label>
        <input
          name="sri_lankan"
          onChange={(e) => setSriLankan(e.target.value)}
          placeholder="sri_lankan"
        />
      </Form.Field>

      <Form.Field>
        <label>italian</label>
        <input
          name="italian"
          onChange={(e) => setItalian(e.target.value)}
          placeholder="italian"
        />
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>
  );
}

export default FlightAddToCart;
