import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import {useRouter} from 'next/router';

const ResourceEdit = ({resource}) => {

    const router = useRouter();
    const updateResource = (formData) => {
        axios.patch("/api/resources", formData)
        .then(_ => router.push(`/resources/${formData.id}`))
        .catch(error => alert(error.message));
    }

    return(
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <ResourceForm
                            initialData={resource}
                            onFormSubmit={updateResource} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({params}){
    const resData = await fetch(`${process.env.API_URL}/resources/` + params.id);

    const data = await resData.json();

    return {
        props: {
            resource: data
        }
    }
}

export default ResourceEdit;