import { Buttons, Button } from './Options.styled';
import propTypes from 'prop-types';

export const FedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons count={options.length}>
      {options.map(options => (
        <Button
          key={options}
          name={options}
          type="button"
          onClick={onLeaveFeedback}
        >
          {options}
        </Button>
      ))}
    </Buttons>
  );
};
FedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
export default FedbackOptions;
