import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import request from 'superagent';

// This method will insert data into the backoffice
function CreateHotels() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [imageurl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');

  const sendDataToAPI = () => {
    const data = new URLSearchParams();
    data.append('name', name);
    data.append('email', email);
    data.append('gender', gender);
    data.append('status', status);
    data.append('imageurl', imageurl);
    data.append('password', password);

    request
      .post('http://localhost:4000/api/backoffice')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Access-Control-Allow-Origin', '*')
      .send(data)
      .then((response) => {
        console.log(response.body);
        // reset form data after successful submission
        setName('');
        setEmail('');
        setGender('');
        setStatus('');
        setImageUrl('');
        setPassword('');
        alert('Data sent successfully')
      })
      .catch((error) => {
        console.log(error);

      });
  };

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
      </Form.Field>
      <Form.Field>
        <label>Gender</label>
        <input
          name="gender"
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <input
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
      </Form.Field>
      <Form.Field>
        <label>Image Url</label>
        <input
          name="imageurl"
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Submit
      </Button>
    </Form>
  );
}

export default CreateHotels;
