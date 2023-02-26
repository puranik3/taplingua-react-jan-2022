import axios from 'axios';

const getWorkshops = async () => {
    // why "await"? -> because we need to wait for the response to come from the backend. When we use "await", we need to mark our function as "async"
    
    // const response = await axios.get( `https://workshops-server.herokuapp.com/workshops` )
    const response = await axios.get( `http://localhost:3000/workshops` )
    
    // return response.data;
    return response.data.data;
};

const postWorkshop = async ( workshop ) => {
    const response = await axios.post(
        // `https://workshops-server.herokuapp.com/workshops`,
        `http://localhost:3000/workshops`,
        workshop,
        {
            'Content-Type': 'application/json'
        }
    );

    // return response.data;
    return response.data.data;
};

export {
    getWorkshops,
    postWorkshop
};