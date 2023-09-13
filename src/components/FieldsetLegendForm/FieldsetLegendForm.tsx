import IFieldsetLegendFormProps from '../../model/components/FieldsetLegendForm/FieldsetLegendForm';
import isPostalCodeValid from '../../utils/validationFunctions/isPostalCodeValid/isPostalCodeValid';
import isTextInputValid from '../../utils/validationFunctions/isTextInputValid/isTextInputValid';
import SelectCountry from '../SelectCountry/SelectCountry';
import UniversalInputWithError from '../UniversalInputWithError/UniversalInputWithError';

const FieldsetLegendForm = ({
  classNameFieldset,
  classNameLegend,
  fieldsetLegendTitle,
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
}: IFieldsetLegendFormProps): JSX.Element => (
  <fieldset className={classNameFieldset}>
    <legend className={classNameLegend}>{fieldsetLegendTitle}</legend>
    <SelectCountry
      value={selectedCountry}
      setValueSelect={setSelectedCountry}
      classNameLabel="authentication-form__label address-label country"
      htmlFor="country"
      textLabel="Country"
    />
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
      classNameLabel="authentication-form__label"
      classNameError="authentication-form__error-message"
    />
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
      classNameLabel="authentication-form__label"
      classNameError="authentication-form__error-message"
    />
    <UniversalInputWithError
      value={addressValuePostalCode}
      onChange={setAddressValuePostalCode}
      showError={showErrorAddressPostalCode}
      changeError={changeErrorAddressPostalCode}
      validationFunction={isPostalCodeValid}
      placeholder="Postal Code"
      labelText="Postal Code"
      labelFor="postalCode"
      type="text"
      classNameInput="authentication-form__input input address-input postal-code"
      classNameLabel="authentication-form__label"
      classNameError="authentication-form__error-message"
    />
  </fieldset>
);

export default FieldsetLegendForm;
