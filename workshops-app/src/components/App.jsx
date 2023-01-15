import Menu from './Menu';
import Home from './pages/Home';
import WorkshopsList from './pages/WorkshopsList';
import AddWorkshop from './pages/AddWorkshop';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Menu />

            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workshops" element={<WorkshopsList />} />
                    <Route path="/workshops/add" element={<AddWorkshop />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;