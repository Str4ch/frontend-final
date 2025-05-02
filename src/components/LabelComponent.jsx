const LabelComponent = ({htmlFor, text}) => {
    return (
       <label htmlFor={htmlFor} className="form-label">
       {text}
       </label>
    )
}

export default LabelComponent