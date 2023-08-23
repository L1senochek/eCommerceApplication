import InputAddres from '../InputAddres/InputAddres';
import LabelInput from '../LabelInput/LabelInput';
import SelectCountry from '../SelectCountry/SelectCountry';

export interface FieldsetLegendFormProps {
  classNameFieldset?: string;
  classNameLegend?: string;
  fieldsetLegendTitle?: string;
  showError: boolean;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  addressValueCountry: string;
  setAddressValueCountry: React.Dispatch<React.SetStateAction<string>>;
  addressValueStreetName: string;
  setAddressValueStreetName: React.Dispatch<React.SetStateAction<string>>;
  addressValuePostalCode: string;
  setAddressValuePostalCode: React.Dispatch<React.SetStateAction<string>>;
}

const FieldsetLegendForm = ({
  classNameFieldset,
  classNameLegend,
  fieldsetLegendTitle,
  showError,
  selectedCountry,
  setSelectedCountry,
  addressValueCountry,
  setAddressValueCountry,
  addressValueStreetName,
  setAddressValueStreetName,
  addressValuePostalCode,
  setAddressValuePostalCode,
}: FieldsetLegendFormProps): JSX.Element => (
  <fieldset className={classNameFieldset}>
    <legend className={classNameLegend}>{fieldsetLegendTitle}</legend>
    <LabelInput classLabel="authentication-form__address-label country" htmlFor="country">
      Country
    </LabelInput>
    <SelectCountry value={selectedCountry} setValueSelect={setSelectedCountry} />
    <LabelInput classLabel="authentication-form__address-label city" htmlFor="city">
      City
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValueCountry}
      setValueAddres={setAddressValueCountry}
      classNameInput="city"
      placeholderInput="City"
    />
    <LabelInput classLabel="authentication-form__address-label street-name" htmlFor="street-name">
      Street Name
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValueStreetName}
      setValueAddres={setAddressValueStreetName}
      classNameInput="street-name"
      placeholderInput="Street Name"
    />
    <LabelInput classLabel="authentication-form__address-label postal-code" htmlFor="postal-code">
      Postal Code
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValuePostalCode}
      setValueAddres={setAddressValuePostalCode}
      classNameInput="postal-code"
      placeholderInput="Postal Code"
    />
  </fieldset>
);

export default FieldsetLegendForm;
