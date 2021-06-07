import Link from 'next/link';
import moment from "moment";
import StatusBadge from "components/StatusBadge";

const ResourceList = ({resources}) => {

    return (
        <section className="hero ">
        <div className="hero-body">
          <div className="container">
    
            <section className="section">
              <div className="columns is-multiline is-variable is-8">
                  {
                      resources.map(resource => {
                          return (
                            <div key={resource.id} className="column is-5 is-offset-1 ">
                                <div className="content is-medium box">
                                  <h2 className="subtitle is-5 has-text-grey">{moment(resource.createdAt).format("LLL")}</h2>
                                  <h1 className="title has-text-black is-3">{resource.title} <StatusBadge status={resource.status} /></h1>
                                  <p className="has-text-dark">{resource.description}</p>
                                  <Link href={`/resources/${resource.id}`}>
                                    <button className="button is-link is-small">View Details</button>
                                  </Link>
                                </div>
                            </div>
                          )
                      })
                  }
                
              </div>
            </section>
    
          </div>
        </div>
      </section> 
    )
}

export default ResourceList;