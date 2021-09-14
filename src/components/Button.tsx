type ButtonProps = {
    handleClick: () => void

}

function Button(props: ButtonProps) {
    return (
        <button onClick={props.handleClick}>
            Click
        </button>
    )
}

export default Button
