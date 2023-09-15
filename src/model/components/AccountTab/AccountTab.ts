import { Customer } from '@commercetools/platform-sdk';

interface IAccountTab {
  userProfile: Customer | null;
  onInputChange: (fieldName: string, value: string) => void;
  setUserProfile: React.Dispatch<React.SetStateAction<Customer | null>>;
}

export default IAccountTab;
