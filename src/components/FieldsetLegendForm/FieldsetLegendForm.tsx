import { ReactNode } from 'react';

export interface FieldsetLegendFormProps {
  classNameFieldset?: string;
  classNameLegend?: string;
  fieldsetLegendTitle?: string;
  children: ReactNode;
}

const FieldsetLegendForm = ({
  classNameFieldset,
  classNameLegend,
  fieldsetLegendTitle,
  children,
}: FieldsetLegendFormProps): JSX.Element => (
  <fieldset className={classNameFieldset}>
    <legend className={classNameLegend}>{fieldsetLegendTitle}</legend>
    {children}
  </fieldset>
);

export default FieldsetLegendForm;
