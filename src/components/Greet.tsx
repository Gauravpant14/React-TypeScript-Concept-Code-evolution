type GreetProps = {
    name: String
    messageCount: number
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
            {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} new request`: `Welcome Guest User`}
            </h2>
        </div>
    )
}