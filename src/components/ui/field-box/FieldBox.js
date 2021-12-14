import './FieldBox.css';

function FieldBox(props) {
  return (
    <div className="field-box">
         {props.children}
    </div>
  );
}

export default FieldBox;