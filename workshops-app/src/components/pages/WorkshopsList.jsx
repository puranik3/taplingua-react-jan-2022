import { useEffect, useState } from 'react';
import { getWorkshops } from '../../services/workshops';

const WorkshopsList = () => {
    const [ workshops, setWorkshops ] = useState( [] );

    useEffect(
        // 1st argument -> function to call
        () => { 
            const helper = async () => {
                const workshops = await getWorkshops();
                console.log( workshops ); // shows the array
                setWorkshops( workshops );
            };

            helper();
        },
        // 2nd argument -> empty array means we need the function to be called when the component renders for the first time
        []
    );

    return (
        <div>
            <h1>List of workshops</h1>
            <hr />
            {workshops.length}
        </div>

    );
}
 
export default WorkshopsList;