import React from 'react';
import Form from './styles';

class CreateABTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleChange = (event, group) => {
    const { value } = event.target
    this.setState(() => ({
      [`value${group}`]: value
    }));
  };

  render() {
    const { value1, value2 } = this.state
    return (

      <Form className="ui form">
        <div className="field">
          <label htmlFor="name">A/B test name:</label>
          <input type="text" name="name" id="first-name" placeholder="AB test name" />
        </div>
        <div className="field">
          <label htmlFor="salt">Salt:</label>
          <input type="text" name="last-name" id="last-name" placeholder="Salt" />
        </div>

        <div className="inline fields">
          <label htmlFor="identifier-type">Identifier type:</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="shadow-id"
                id="shadow-id"
                value="shadow-id"
                checked={value1 === 'shadow-id'}
                tabIndex="0"
                className="hidden"
                onChange={(event) => this.handleChange(event, 1)}
              />
              <label htmlFor="shadow-id">shadow id</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="user-id"
                id="user-id"
                value="user-id"
                checked={value1 === 'user-id'}
                tabIndex="0"
                className="hidden"
                onChange={(event) => this.handleChange(event, 1)}
              />
              <label htmlFor="user-id">user id</label>
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="base-population">Base population:</label>
          <input type="text" name="base-population" id="base-population" placeholder="Base population"/>
        </div>

        <div className="field">
          <label htmlFor="date">Start date</label>
          <div className="ui input left icon">
            <i className="calendar icon" />
            <input type="text" name="start-date" placeholder="Start date"/>
          </div>
        </div>

        <div className="inline fields">
          <label htmlFor="exclusive">Exclusive:</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="yes"
                checked={value2 === 'yes'}
                id="yes"
                value="yes"
                tabIndex="0"
                className="hidden"
                onChange={(event) => this.handleChange(event, 2)}
              />
              <label htmlFor="yes">Yes</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="no"
                checked={value2 === 'no'}
                tabIndex="0"
                id="no"
                value="no"
                className="hidden"
                onChange={(event) => this.handleChange(event, 2)}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <button className="ui button" type="submit">Submit</button>
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
