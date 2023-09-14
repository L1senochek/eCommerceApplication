import { useContext } from 'react';
import { AccountContext } from '../AccountContext/AccountContext';

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
            accountContext?.activeTab === 'general' ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick('general')}
        >
          General
        </div>
        <div
          className={`account__tab security ${
            accountContext?.activeTab === 'security' ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick('security')}
        >
          Security
        </div>
        <div
          className={`account__tab addresses ${
            accountContext?.activeTab === 'addresses' ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick('addresses')}
        >
          Addresses
        </div>
        <div
          className={`account__tab orders ${
            accountContext?.activeTab === 'orders' ? 'active' : ''
          }`}
          onClick={(): void => handleTabClick('orders')}
        >
          Orders
        </div>
      </div>
    </>
  );
};

export default ActiveTabs;
