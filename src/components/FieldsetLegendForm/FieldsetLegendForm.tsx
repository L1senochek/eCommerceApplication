import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
// import InputAddres from '../InputAddres/InputAddres';
import LabelInput from '../LabelInput/LabelInput';
import SelectCountry from '../SelectCountry/SelectCountry';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';

export interface FieldsetLegendFormProps {
  // showError: boolean;
  selectedCountry: string;
  addressValueCountry: string;
  addressValueStreetName: string;
  addressValuePostalCode: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  setAddressValueCountry: React.Dispatch<React.SetStateAction<string>>;
  setAddressValueStreetName: React.Dispatch<React.SetStateAction<string>>;
  setAddressValuePostalCode: React.Dispatch<React.SetStateAction<string>>;
  showErrorAddressCountry: boolean;
  showErrorAddressStreetName: boolean;
  showErrorAddressPostalCode: boolean;
  changeErrorAddressCountry: (error: boolean) => void;
  changeErrorAddressStreetName: (error: boolean) => void;
  changeErrorAddressPostalCode: (error: boolean) => void;
  classNameFieldset?: string;
  classNameLegend?: string;
  fieldsetLegendTitle?: string;
}

const FieldsetLegendForm = ({
  classNameFieldset,
  classNameLegend,
  fieldsetLegendTitle,
  // showError,
  selectedCountry,
  addressValueCountry,
  addressValueStreetName,
  addressValuePostalCode,
  setSelectedCountry,
  setAddressValueCountry,
  setAddressValueStreetName,
  setAddressValuePostalCode,
  showErrorAddressCountry,
  showErrorAddressStreetName,
  showErrorAddressPostalCode,
  changeErrorAddressCountry,
  changeErrorAddressStreetName,
  changeErrorAddressPostalCode,
}: FieldsetLegendFormProps): JSX.Element => (
  <fieldset className={classNameFieldset}>
    <legend className={classNameLegend}>{fieldsetLegendTitle}</legend>
    <LabelInput classNameLabel="authentication-form__address-label country" htmlFor="country">
      Country
    </LabelInput>
    <SelectCountry value={selectedCountry} setValueSelect={setSelectedCountry} />
    {/* //// */}
    <UniversalInputWithError
      value={addressValueCountry}
      onChange={setAddressValueCountry}
      showError={showErrorAddressCountry}
      changeError={changeErrorAddressCountry}
      validationFunction={isTextInputValid}
      placeholder="City"
      labelText="City"
      labelFor="city"
      type="text"
      classNameInput="authentication-form__input input address-input city"
    />
    {/* <LabelInput classNameLabel="authentication-form__address-label city" htmlFor="city">
      City
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValueCountry}
      setValueAddres={setAddressValueCountry}
      classNameInput="city"
      placeholderInput="City"
    /> */}
    <UniversalInputWithError
      value={addressValueStreetName}
      onChange={setAddressValueStreetName}
      showError={showErrorAddressStreetName}
      changeError={changeErrorAddressStreetName}
      validationFunction={isTextInputValid}
      placeholder="Street Name"
      labelText="Street Name"
      labelFor="streetName"
      type="text"
      classNameInput="authentication-form__input input address-input street-name"
    />
    {/* <LabelInput
      classNameLabel="authentication-form__address-label street-name"
      htmlFor="street-name"
    >
      Street Name
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValueStreetName}
      setValueAddres={setAddressValueStreetName}
      classNameInput="street-name"
      placeholderInput="Street Name"
    /> */}
    <UniversalInputWithError
      value={addressValuePostalCode}
      onChange={setAddressValuePostalCode}
      showError={showErrorAddressPostalCode}
      changeError={changeErrorAddressPostalCode}
      validationFunction={isTextInputValid}
      placeholder="Postal Code"
      labelText="Postal Code"
      labelFor="postalCode"
      type="text"
      classNameInput="authentication-form__input input address-input postal-code"
    />
    {/* <LabelInput
      classNameLabel="authentication-form__address-label postal-code"
      htmlFor="postal-code"
    >
      Postal Code
    </LabelInput>
    <InputAddres
      showError={showError}
      value={addressValuePostalCode}
      setValueAddres={setAddressValuePostalCode}
      classNameInput="postal-code"
      placeholderInput="Postal Code"
    /> */}
  </fieldset>
);

export default FieldsetLegendForm;
