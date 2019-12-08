import Styled from 'styled-components';

const SliderWrapper = Styled.div`
  width: 400px;      
`;

const RheostatContainer = Styled.div`
  margin-top: 20px; 
  margin-bottom: 50px; 
  margin-left: 20px;
  &:last-child {
        margin-bottom: 30px;
    }
`;

const RheostatDescription = Styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export default SliderWrapper;
export {
  RheostatContainer,
  RheostatDescription
};
