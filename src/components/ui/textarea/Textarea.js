import './textarea.css';
function Textarea(props) {
  
   return (
   <div>
       <textarea
          placeholder={props.placeholder}
          {...props.validation}/>
          
   </div>
  );
}

export default Textarea;