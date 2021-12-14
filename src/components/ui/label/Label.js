
import './label.css';

function Label(props) {
  return (
   <label className='labels'>{props.value}</label>
  );
}

export default Label;