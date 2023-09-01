import IHeaderItemLink from '../../model/components/HeaderItemLink/HeaderItemLink';
import './header-item-link.scss';

const HeaderItemLink = ({
  title,
  otherClassNameWrapper,
  otherClassNameTitle,
}: IHeaderItemLink): JSX.Element => {
  return (
    <>
      <span
        className={`header-item__wrapper ${otherClassNameWrapper ? otherClassNameWrapper : ''}`}
      >
        <span className={`header-item__title ${otherClassNameTitle ? otherClassNameTitle : ''}`}>
          {title}
        </span>
        <span className={`header-item__link`}></span>
      </span>
    </>
  );
};

export default HeaderItemLink;
