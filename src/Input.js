import PropTypes from "prop-types";
function Input(props){
    return (
        <input 
        id = {props.id} 
        name={props.name}
        type = {props.type}
        onChange={props.onChange} 
        className={props.className} 
        placeholder={props.placeholder_text}
        value={props.value}
        check={props.checked}>
            
        </input>
    );
}
export default Input;