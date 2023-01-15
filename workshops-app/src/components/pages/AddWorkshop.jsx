import { useRef } from 'react';
import { postWorkshop } from '../../services/workshops';

const AddWorkshop = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const imageUrlRef = useRef();

    const submitHandler = ( event ) => {
        event.preventDefault(); // hey browser! do not collect form data, we will do it

        alert( 'form is to be submitted' );

        const workshop = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            imageUrl: imageUrlRef.current.value,
        };

        if( workshop.name.trim() === '' || workshop.description.trim() === '' || workshop.imageUrl.trim() === '' ) {
            alert( 'Fill out all inputs' );
        } else {
            // all good!
            postWorkshop( workshop );
        }
    };

    return (
        <div>
            <h1>Add a workshop</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" ref={nameRef} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" ref={descriptionRef}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="imageUrl" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" ref={imageUrlRef} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add a workshop</button>
            </form>
        </div>
    );
}
 
export default AddWorkshop;