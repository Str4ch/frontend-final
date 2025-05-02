const AlertComponent = ({alertType, text}) => {
    return (
        <div class={`alert ${alertType}`} role="alert">
            {text}
        </div>
    )
}

export default AlertComponent