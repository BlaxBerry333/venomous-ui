import { memo, useId } from 'react';
import { Flex } from '../Flex';
import type { LabelsComponentType } from './Form.types';
import Label from './Label';

const Labels: LabelsComponentType = memo(
  ({ startLabel, endLabel, labelsDirection = 'row', renderElement, isDisabled, isError }) => {
    const id = useId();

    return (
      <Flex className="VenomousUI-Labels" gap={0} row={labelsDirection === 'row'}>
        {startLabel && (
          <Label label={startLabel} elementId={id} isDisabled={isDisabled} isError={isError} />
        )}
        {renderElement(id)}
        {endLabel && (
          <Label label={endLabel} elementId={id} isDisabled={isDisabled} isError={isError} />
        )}
      </Flex>
    );
  },
);

Labels.displayName = 'Labels';
export default Labels;
