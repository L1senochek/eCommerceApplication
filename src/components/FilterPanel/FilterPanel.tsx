import Search from '../Search/Search';
import './filter-panel.scss';

const FilterPanel = (): JSX.Element => {
  return (
    <>
      <div className="filter-panel">
        <Search />
      </div>
    </>
  );
};

export default FilterPanel;
