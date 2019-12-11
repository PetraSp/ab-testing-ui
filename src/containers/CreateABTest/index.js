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

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }

    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  // testingCB = (value, id) => console.log('cb fired', value, id)

  render() {
    const { value1, value2 } = this.state;
    return (
      <Container className="ui centered">
        <Form onSubmit={this.handleSubmit}>
          <Header as="h2" textAlign="center" style={{ marginTop: 15 }}>
            New A/B Test
          </Header>
          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>A/B test name:</label>
            <Form.Input
              placeholder={'Choose a name that reflects what you\'re testing.'}
              name="testName"
            />
          </Form.Field>

          <Form.Field style={fieldsMargin}>
            <label style={labelColor}>Salt:</label>
            <Form.Input
              placeholder="Salt"
              name="salt"
            />
          </Form.Field>

          <Form.Group inline style={fieldsMargin}>
            <label style={labelColor}>Identifier type:</label>
            <Form.Field>
              <Radio
                label="shadow-id"
                id="shadow-id"
                name="radioGroup1"
                value="shadow-id"
                checked={value1 === 'shadow-id'}
                onChange={(event) => this.handleChange(event, 1)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="user-id"
                id="user-id"
                name="radioGroup1"
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
            <Form.Input placeholder="Base population" name="basePopulation" />
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
                name="radioGroup2"
                value="yes"
                checked={value2 === 'yes'}
                onChange={(event) => this.handleChange(event, 2)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="no"
                id="no"
                name="radioGroup2"
                value="no"
                checked={value2 === 'no'}
                onChange={(event) => this.handleChange(event, 2)}
              />
            </Form.Field>
          </Form.Group>

          <Button style={{ margin: '0 auto', display: 'block' }} color="blue">Submit</Button>
          <div />
        </Form>
      </Container>
    );
  }
}

export default CreateABTest;
