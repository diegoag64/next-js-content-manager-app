import Link from 'next/link';
import moment from "moment";
import StatusBadge from "components/StatusBadge";



const ResourceHighlight = ({resources}) => {

    return (
        <section className="hero ">
            <div className="hero-body">
            <div className="container">
                {
                    resources.map(resource => {
                        return (
                            <section key={resource.id} className="section">
                                <div className="columns">
                                    <div className="column is-8 is-offset-2">
                                    <div className="content is-medium box">
                                        <h2 className="subtitle is-4">{moment(resource.createdAt).format("LLL")}</h2>
                                        <h1 className="title">{resource.title} <StatusBadge status={resource.status} /></h1>
                                        <p>{resource.description}</p>
                                        <Link href={`/resources/${resource.id}`}>
                                            <button className="button is-link">See Details</button>
                                        </Link>
                                        
                                    </div>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
            </div>
        </section>
    )
}

export default ResourceHighlight;