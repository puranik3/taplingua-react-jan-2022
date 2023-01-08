import { useEffect } from 'react';
import { getWorkshops } from '../../services/workshops';

const WorkshopsList = () => {
    useEffect(
        // 1st argument -> function to call
        () => { 
            const helper = async () => {
                const workshops = await getWorkshops();
                console.log( workshops ); // shows the array
            }

            helper();
        },
        // 2nd argument -> empty array means we need the function to be called when the component renders for the first time
        []
    );

    return (
        <div>Workshops List page</div>
    );
}
 
export default WorkshopsList;