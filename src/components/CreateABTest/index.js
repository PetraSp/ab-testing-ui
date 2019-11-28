import React from 'react';
import Form from './styles';

const CreateABTest = () => {
  return (
    <Form className="ui form">
      <div className="field">
        <label htmlFor="name">AB test name:</label>
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
            <input type="radio" name="shadow-id" checked="" id="shadow-id" tabIndex="0" className="hidden" />
            <label htmlFor="shadow-id">shadow id</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="user-id" tabIndex="0" id="user-id" className="hidden" />
            <label htmlFor="user-id">user id</label>
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="base-population">Base population:</label>
        <input type="text" name="base-population" id="base-population" placeholder="Base population" />
      </div>

      <div className="field">
        <label htmlFor="date">Start date</label>
        <div className="ui input left icon">
          <i className="calendar icon" />
          <input type="text" name="start-date" placeholder="Start date" />
        </div>
      </div>

      <div className="inline fields">
        <label htmlFor="exclusive">Exclusive:</label>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="yes" checked="" id="yes" tabIndex="0" className="hidden" />
              <label htmlFor="yes">Yes</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="no" tabIndex="0" id="no" className="hidden" />
              <label htmlFor="no">No</label>
          </div>
        </div>
      </div>

      <button className="ui button" type="submit">Submit</button>
    </Form>
  );
}

export default CreateABTest;
