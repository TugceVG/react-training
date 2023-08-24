import "./formInput.css";

export default function FormInput(props) {
    return (
        <div className="formInput">
            {/* <label>Username</label> */}
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    )
}