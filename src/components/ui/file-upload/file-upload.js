
import './file-upload.css';

function FileUpload(props) {
    
  return (
    <div class="file-input">
        <input type="file" id="file"  class="file"  accept="application/pdf"  {...props.validation}/>
        <label for="file">{props ? "Select file": props}</label> 
    </div>

  );
}

export default FileUpload;