import axios from 'axios';

const getWorkshops = async () => {
    // why "await"? -> because we need to wait for the response to come from the backend. When we use "await", we need to mark our function as "async"
    const response = await axios.get( `https://workshops-server.herokuapp.com/workshops` )
    return response.data;
};

export {
    getWorkshops
};