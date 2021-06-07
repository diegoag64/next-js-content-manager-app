import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import StatusBadge from "components/StatusBadge";

const ResourceDetail = ({resource}) => {

    const activateResource = () => {
        axios.patch('/api/resources', {...resource, status: "active"})
        .then(_ => location.reload())
        .catch(_ => alert("Cannot activate the resource"));
    }

    return (
        <Layout>
            <section className="hero ">
                <div className="hero-body">
                    <div className="container">
                        
                        <section  className="section">
                            <div className="columns">
                                <div className="column is-8 is-offset-2">
                                <div className="content is-medium box">
                                    <h2 className="subtitle is-4">{moment(resource.createdAt).format("LLL")}</h2>
                                    <h1 className="title">
                                        {resource.title}
                                        <StatusBadge status={resource.status} />
                                    </h1>
                                    <p>{resource.description}</p>
                                    <p><b>Time To Finish:</b> {resource.timeToFinish} minutes</p>
                                    {  
                                        resource.status !== "active" 
                                            ?   <Link href={`/resources/${resource.id}/edit`}>
                                                    <button className="button is-link mr-1">Edit</button>
                                                </Link>
                                            : ""
                                    }
                                    
                                    {  
                                        resource.status !== "complete" && resource.status !== "active"
                                            ?   <button onClick={activateResource} className="button mr-1 is-success">
                                                    Activate
                                                </button> 
                                            : ""
                                    }
                                    
                                    <Link href="/">
                                        <button className="button is-link is-light">Go Back</button>
                                    </Link>

                                </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

/* export async function getStaticPaths() {
    const resData = await fetch("http://localhost:3001/api/resources");
    const data = await resData.json();
    const paths = data.map(resource => {
      return {
        params: { id: resource.id}
      }
    });
    return {
      paths,
      // means that other routes should resolve into 404 page
      fallback: false
    }
  }

export async function getStaticProps({params}){
    const resData = await fetch("http://localhost:3001/api/resources/" + params.id);
    const data = await resData.json();

    return {
        props: {
            resource: data
        },
        revalidate: 1
    }
} */

export async function getServerSideProps({params}){
    const resData = await fetch(`${process.env.API_URL}/resources/` + params.id);

    const data = await resData.json();

    return {
        props: {
            resource: data
        }
    }
}

export default ResourceDetail;