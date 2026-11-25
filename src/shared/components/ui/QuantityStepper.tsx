import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import '@/shared/styles/components/quantity-stepper.css';

interface QuantityStepperProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  ariaLabel?: string;
}

export const QuantityStepper = ({
  value,
  onIncrement,
  onDecrement,
  min = 1,
  max,
  ariaLabel = 'Cantidad',
}: QuantityStepperProps) => {
  const isMinReached = value <= min;
  const isMaxReached = max !== undefined && value >= max;

  return (
    <div className='qty-stepper' role='group' aria-label={ariaLabel}>
      <button
        type='button'
        className='qty-stepper__btn'
        aria-label='Disminuir cantidad'
        disabled={isMinReached}
        onClick={onDecrement}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <span className='qty-stepper__value' aria-live='polite'>
        {value}
      </span>

      <button
        type='button'
        className='qty-stepper__btn'
        aria-label='Aumentar cantidad'
        disabled={isMaxReached}
        onClick={onIncrement}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};