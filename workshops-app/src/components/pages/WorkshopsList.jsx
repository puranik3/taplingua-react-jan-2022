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
            <div className="row">
                {
                    // generate an array of JSX element (React elements)
                    workshops.map( w => (
                        <div className="col-12 col-md-3 col-lg-4 d-flex">
                            <div className="card p-3 w-100 my-3">
                                <img src={w.imageUrl} className="card-img-top" alt={w.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{w.name}</h5>
                                    <div className="card-text">
                                        {w.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>

    );
}
 
export default WorkshopsList;