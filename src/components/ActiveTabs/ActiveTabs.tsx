import { useContext } from 'react';
import { AccountContext } from '../AccountContext/AccountContext';
import {
  ACCOUNT_TAB_ADDRESSES,
  ACCOUNT_TAB_GENERAL,
  ACCOUNT_TAB_ORDERS,
  ACCOUNT_TAB_SECURITY,
} from '../../utils/constants/constants';

const ActiveTabs = (): JSX.Element => {
  const accountContext = useContext(AccountContext);

  const handleTabClick = (tabName: string): void => {
    accountContext?.setActiveTab(tabName);
    console.log(tabName, accountContext?.activeTab);
  };

  return (
    <>
      <div className="account__tabs">
        <div
          className={`account__tab general ${
            accountContext?.activeTab === ACCOUNT_TAB_GENERAL ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick(ACCOUNT_TAB_GENERAL)}
        >
          General
        </div>
        <div
          className={`account__tab security ${
            accountContext?.activeTab === ACCOUNT_TAB_SECURITY ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick(ACCOUNT_TAB_SECURITY)}
        >
          Security
        </div>
        <div
          className={`account__tab addresses ${
            accountContext?.activeTab === ACCOUNT_TAB_ADDRESSES ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick(ACCOUNT_TAB_ADDRESSES)}
        >
          Addresses
        </div>
        <div
          className={`account__tab orders ${
            accountContext?.activeTab === ACCOUNT_TAB_ORDERS ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick(ACCOUNT_TAB_ORDERS)}
        >
          Orders
        </div>
      </div>
    </>
  );
};

export default ActiveTabs;
