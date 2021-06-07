

const StatusBadge = (props) => {

    return (
        <>
        {props.status === "complete" ? (<span className="tag is-primary ml-2">Complete</span>) : ""}
        {props.status === "active" ? (<span className="tag is-link ml-2">Active</span>) : ""}
        </>
    )
}

export default StatusBadge;