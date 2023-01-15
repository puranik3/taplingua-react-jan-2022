import Menu from './Menu';
import Home from './pages/Home';
import WorkshopsList from './pages/WorkshopsList';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Menu />

            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/workshops" element={<WorkshopsList />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;