type StatusProps = {
    status: 'Loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'Loading'){
        message = 'Loading....'
    }else if(props.status === 'success'){
        message = 'Error Fetching Data'
    } else if(props.status === 'error'){
        message = 'Error Fetching data'
    }
    return (
        <div>
            <h2>
                Status: {message}
            </h2>
        </div>
    )
}