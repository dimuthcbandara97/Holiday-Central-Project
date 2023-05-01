import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import request from 'superagent';

// This method will insert data into the backoffice
function PackageAddToCart() {
  // destination
  const [destination, setName] = useState('');
  // speciality
  const [speciality, setName] = useState('');
  // duration
  const [duration, setName] = useState('');
  // number_of_travellers
  const [number_of_travellers, setName] = useState('');
  // price
  const [price, setName] = useState('');
  // package_rating
  const [package_rating, setName] = useState('');
  // agent_name
  const [agent_name, setName] = useState('');
  // user_email
  const [user_email, setName] = useState('');
  // checkout_date
  const [checkout_date, setName] = useState('');
  // aditional_note
  const [name, setName] = useState('');
  // family_holiday
  const [name, setName] = useState('');
  // wildlife_excursion
  const [name, setName] = useState('');
  // beach_holiday
  const [name, setName] = useState('');
  // honeymoon
  const [name, setName] = useState('');

  const sendDataToAPI = () => {
    const data = new URLSearchParams();
    
    // destination
    data.append('name', name);
    // speciality
    data.append('name', name);
    // duration
    data.append('name', name);
    // number_of_travellers
    data.append('name', name);
    // price
    data.append('name', name);
    // package_rating
    data.append('name', name);
    // agent_name
    data.append('name', name);
    // user_email
    data.append('name', name);
    // checkout_date
    data.append('name', name);
    // aditional_note
    data.append('name', name);
    // family_holiday
    data.append('name', name);
    // wildlife_excursion
    data.append('name', name);
    // beach_holiday
    data.append('name', name);
    // honeymoon
    data.append('name', name);

    request
      .post('http://localhost:4000/api/backoffice')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
;
        // destination
        setName('')
// speciality
setName('')
// duration
setName('')
// number_of_travellers
setName('')
// price
setName('')
// package_rating
setName('')
// agent_name
setName('')
// user_email
setName('')
// checkout_date
setName('')
// aditional_note
setName('')
// family_holiday
setName('')
// wildlife_excursion
setName('')
// beach_holiday
setName('')
// honeymoon
setName('')
        alert('Data sent successfully')
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (
    <Form>
      

      {/* destination */}
      <Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* speciality */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* duration */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* number_of_travellers */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* price */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* package_rating */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* agent_name */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* user_email */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* checkout_date */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* aditional_note */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* family_holiday */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* wildlife_excursion */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* beach_holiday */}
<Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
{/* honeymoon */}
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

export default PackageAddToCart;
