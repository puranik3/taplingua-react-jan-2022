const AddWorkshop = () => {
    return (
        <div>
            <h1>Add a workshop</h1>
            <hr />
            <form>
                <div class="row mb-3">
                    <label htmlFor="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label htmlFor="description" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="description"></textarea>
                    </div>
                </div>
                <div class="row mb-3">
                    <label htmlFor="imageUrl" class="col-sm-2 col-form-label">Image URL</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="imageUrl" />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Add a workshop</button>
            </form>
        </div>
    );
}
 
export default AddWorkshop;