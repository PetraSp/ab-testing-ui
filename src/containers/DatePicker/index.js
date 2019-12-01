import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      date: moment(),
    };
  }

  render() {
    const { focused, date } = this.state;
    return (
      <SingleDatePicker
        numberOfMonths={1}
        onDateChange={(date) => this.setState({ date })}
        onFocusChange={({ focused }) => this.setState({ focused })}
        focused={focused}
        date={date}
      />
    );
  }
}

export default DatePicker;
