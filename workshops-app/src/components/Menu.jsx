// sfc (stateless function component)
const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Workshops App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/workshops">Workshops List</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
