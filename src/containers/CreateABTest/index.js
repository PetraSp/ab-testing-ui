import 'react-dates/initialize';
import React from 'react';
import {
  Form,
  Button,
  Container,
  Header,
  Radio
} from 'semantic-ui-react';
import DatePicker from '../DatePicker';
import 'react-dates/lib/css/_datepicker.css';
import Slider from '../Slider';

const fieldsMargin = {
  marginBottom: '25px'
};

const labelColor = {
  color: '#3498DB',
};

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
      <Container className="ui centered">
        <Form size="medium">
          <Header as="h2" textAlign="center" style={{ marginTop: 15 }}>
            New A/B Test
          </Header>
          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>A/B test name:</label>
            <Form.Input placeholder={'Choose a name that reflects what you\'re testing.'} />
          </Form.Field>

          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>Salt:</label>
            <Form.Input placeholder="Salt" />
          </Form.Field>

          <Form.Group inline style={fieldsMargin}>
            <label style={labelColor}>Identifier type:</label>
            <Form.Field>
              <Radio
                label="shadow-id"
                id="shadow-id"
                name="radioGroup"
                value="shadow-id"
                checked={value1 === 'shadow-id'}
                onChange={(event) => this.handleChange(event, 1)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="user-id"
                id="user-id"
                name="radioGroup"
                value="user-id"
                checked={value1 === 'user-id'}
                onChange={(event) => this.handleChange(event, 1)}
              />
            </Form.Field>
          </Form.Group>

          <Form.Field>
            <label style={labelColor}>Weights:</label>
            <Slider />
          </Form.Field>

          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>Base population:</label>
            <Form.Input placeholder="Base population" />
          </Form.Field>

          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>Start date:</label>
            <DatePicker />
          </Form.Field>

          <Form.Group inline style={fieldsMargin}>
            <label style={labelColor}>Exclusive:</label>
            <Form.Field>
              <Radio
                label="yes"
                id="yes"
                name="radioGroup"
                value="yes"
                checked={value2 === 'yes'}
                onChange={(event) => this.handleChange(event, 2)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="no"
                id="no"
                name="radioGroup"
                value="no"
                checked={value2 === 'no'}
                onChange={(event) => this.handleChange(event, 2)}
              />
            </Form.Field>
          </Form.Group>

          <Button style={{ margin: '0 auto', display: 'block' }} color="blue" type="submit">Submit</Button>
          <div />
        </Form>
      </Container>
    );
  }
}

export default CreateABTest;
