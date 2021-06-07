
import axios from "axios";
import moment from "moment";

export default async function(req, res){

    if(req.method === "GET"){
        const dataRes = await fetch(`${process.env.API_URL}/resources`);
        let data = await dataRes.json();
        res.send(data);
    } 
    
    if (req.method === "POST" || req.method === "PATCH") {
        const {id, title, description, link, timeToFinish, priority} = req.body;
        let url = `${process.env.API_URL}/resources`;
        if(!title || !description || !link || !timeToFinish || !priority) {
            return res.status(422).send("Data missing");
        } 

        if(req.method === "PATCH"){
            url += `/${id}`;
        }

        console.log('showing url ---------------------------------------------');
        console.log(url);

        try {
            const axiosResponse = await axios[req.method.toLowerCase()](url, req.body);
            return res.send("Data has been received");
        } catch (error) {
            console.log(error);
            return res.status(422).send(error);
        }   
        
    }

}

