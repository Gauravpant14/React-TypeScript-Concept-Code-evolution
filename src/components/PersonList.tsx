type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}


export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <h2 style={{color: 'red'}}> Person List  </h2>
            {props.names.map(name => {
                return (
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}