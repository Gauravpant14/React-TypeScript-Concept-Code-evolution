type ContainerProps = {
    styles: React.CSSProperties
    name: string
}

function Container(props: ContainerProps) {
    return (
        <div style={props.styles}>
            Text content goes here : {props.name}
        </div>
    )
}

export default Container
