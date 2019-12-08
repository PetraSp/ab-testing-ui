import React from 'react';
import Rheostat from 'rheostat';
import 'react-dates/lib/css/_datepicker.css';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';
import SliderWrapper, { RheostatContainer, RheostatDescription } from './styles';

ThemedStyleSheet.registerInterface(aphroditeInterface);

ThemedStyleSheet.registerTheme({
  rheostat: {
    ...RheostatDefaultTheme.rheostat,
    color: {
      ...RheostatDefaultTheme.rheostat.color,
      progressBar: '#3498DB',
    }
  },
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
    <SliderWrapper>
      <RheostatContainer>
        <RheostatDescription>
          <span>
            Control Group:
          </span>
          <span>
            {controlGroup}%
          </span>
        </RheostatDescription>
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
      </RheostatContainer>
      <RheostatContainer>
        <RheostatDescription>
          <span>
            Provider 1:
          </span>
          <span>
            {provider1}%
          </span>
        </RheostatDescription>
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
      </RheostatContainer>
      <RheostatContainer>
        <RheostatDescription>
          <span>
            Provider 2:
          </span>
          <span>
            {provider2}%
          </span>
        </RheostatDescription>
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
      </RheostatContainer>
    </SliderWrapper>
  );
}
}

export default Slider;
