type PersonProps = {
    name: {
        first: string
        middleName?:string
        last: string
    }
}
export const Person = (props: PersonProps) => {
    return <div>
        {props.name.first} {props.name.middleName} {props.name.last}
    </div>
}