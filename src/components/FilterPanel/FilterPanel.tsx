import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import './filter-panel.scss';

const FilterPanel = (): JSX.Element => {
  return (
    <>
      <div className="filter-panel">
        <Search />
        <Sort />
      </div>
    </>
  );
};

export default FilterPanel;
