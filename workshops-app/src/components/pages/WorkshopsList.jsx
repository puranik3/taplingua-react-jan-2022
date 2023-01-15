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
                <div className="col-12 col-md-3 col-lg-4">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            b5
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default WorkshopsList;