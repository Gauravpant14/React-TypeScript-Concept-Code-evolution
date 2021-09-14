type GreetProps = {
    name: String
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have 20 new request</h2>
        </div>
    )
}