import 'react-dates/initialize';
import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import DatePicker from '../DatePicker';
import 'react-dates/lib/css/_datepicker.css';
import Slider from '../../components/Slider';

class CreateABTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleChange = (event, group) => {
    const { value } = event.target;
    this.setState(() => ({
      [`value${group}`]: value
    }));
  };


  render() {
    const { value1, value2 } = this.state;
    return (
      <Form>
        <Form.Field>
          <label>A/B test name:</label>
          <input placeholder={'Choose a name that reflects what you\'re testing.'} />
        </Form.Field>

        <Form.Field>
          <label>Salt:</label>
          <input placeholder="Salt" />
        </Form.Field>

        <Form.Group inline>
          <label>Identifier type:</label>
          <Form.Radio
            label="shadow-id"
            value="shadow-id"
            checked={value1 === 'shadow-id'}
            onChange={(event) => this.handleChange(event, 1)}
          />
          <Form.Radio
            label="user-id"
            value="user-id"
            checked={value1 === 'user-id'}
            onChange={(event) => this.handleChange(event, 1)}
          />
        </Form.Group>

        <Form.Field>
          <label>Weights:</label>
          <Slider />
        </Form.Field>

        <Form.Field>
          <label>Base population:</label>
          <input placeholder="Base population" />
        </Form.Field>


        <Form.Field>
          <label>Start date:</label>
          <DatePicker />
        </Form.Field>

        <Form.Group inline>
          <label>Exclusive:</label>
          <Form.Radio
            label="yes"
            value="yes"
            checked={value2 === 'yes'}
            onChange={(event) => this.handleChange(event, 2)}
          />
          <Form.Radio
            label="no"
            value="no"
            checked={value2 === 'no'}
            onChange={(event) => this.handleChange(event, 2)}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
        <div>
          Selected:
          {value1}
          Secondselected:
          {value2}
        </div>
      </Form>
    );
  }
}

export default CreateABTest;
