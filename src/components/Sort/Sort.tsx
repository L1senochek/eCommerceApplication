import IconArrow from '../IconArrow/IconArrow';
import './sort.scss';

const Sort = (): JSX.Element => {
  return (
    <>
      <div className="sort">
        <h4 className="sort__title">Sort by price</h4>
        <div className="sort__icon">
          <IconArrow />
        </div>
      </div>
    </>
  );
};

export default Sort;
