import PropTypes from "prop-types";
import styles from "./Input.css";
function Input(props){
    return (
        <input 
        id = {props.id} 
        type = {props.type}
        onChange={props.onChange} 
        className={styles.input} 
        placeholder={props.placeholder_text}
        value={props.value}>
            
        </input>
    );
}
export default Input;