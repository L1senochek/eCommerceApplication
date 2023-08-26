interface IFieldsetLegendFormProps {
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

export default IFieldsetLegendFormProps;
