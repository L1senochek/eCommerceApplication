import IEditButtonsProps from '../../model/components/EditButtons/EditButtons';
import './edit-buttons.scss';

const EditButtons = ({
  isEditing,
  onSaveClick,
  onCancelClick,
  onEditClick,
}: IEditButtonsProps): JSX.Element => {
  return (
    <div className="account__btn-wrapper">
      {isEditing ? (
        <>
          <button className="btn" onClick={onSaveClick}>
            Save
          </button>
          <button className="btn" onClick={onCancelClick}>
            Cancel
          </button>
        </>
      ) : (
        <button className="btn" onClick={onEditClick}>
          Edit profile
        </button>
      )}
    </div>
  );
};

export default EditButtons;
