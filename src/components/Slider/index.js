import React from 'react';
import Rheostat from 'rheostat';
import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
  ...RheostatDefaultTheme,
  ...ReactDatesDefaultTheme,
});


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controlGroup: 0,
      provider1: 0,
      provider2: 0,
    };
  }

updateValues = (event, id) => {
  const { values } = event;
  this.setState(() => ({
    [id]: values[0]
  }));
};

render() {
  const { controlGroup, provider1, provider2 } = this.state;
  return (
    <div style={{ width: 400 }}>
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <Rheostat
          onValuesUpdated={(e) => this.updateValues(e, 'controlGroup')}
          min={0}
          max={100}
          values={[controlGroup]}
          snap
          algorithm={{
            getValue: (value, min, max) => {
              const rest = provider1 + provider2;
              return value + rest > 100
                ? Math.round(100 - rest)
                : Math.round(((value - min) / (max - min)) * 100);
            },
            getPosition: (pos, min, max) => {
              const decimal = pos / 100;
              if (pos <= 0) {
                return min;
              }

              if (pos >= 100) {
                return max;
              }

              return Math.round((max - min) * decimal + min);
            }
          }}
        />
      </div>
      <Rheostat
        onValuesUpdated={(e) => this.updateValues(e, 'provider1')}
        min={0}
        max={100}
        snap
        values={[provider1]}
        algorithm={{
          getValue: (value, min, max) => {
            const rest = controlGroup + provider2;
            return value + rest > 100
              ? Math.round(100 - rest)
              : Math.round(((value - min) / (max - min)) * 100);
          },
          getPosition: (pos, min, max) => {
            const decimal = pos / 100;
            if (pos <= 0) {
              return min;
            }

            if (pos >= 100) {
              return max;
            }

            return Math.round((max - min) * decimal + min);
          }
        }}
      />
      <div style={{ marginTop: 50 }}>
        <Rheostat
          onValuesUpdated={(e) => this.updateValues(e, 'provider2')}
          min={0}
          max={100}
          snap
          values={[provider2]}
          algorithm={{
            getValue: (value, min, max) => {
              const rest = controlGroup + provider1;
              return value + rest > 100
                ? Math.round(100 - rest)
                : Math.round(((value - min) / (max - min)) * 100);
            },
            getPosition: (pos, min, max) => {
              const decimal = pos / 100;
              if (pos <= 0) {
                return min;
              }

              if (pos >= 100) {
                return max;
              }

              return Math.round((max - min) * decimal + min);
            }
          }}
        />
      </div>
      <p>
Control Group:
        {controlGroup}
      </p>
      <p>
Provider 1:
        {provider1}
      </p>
      <p>
Provider 2:
        {provider2}
      </p>
    </div>
  );
}
}

export default Slider;
