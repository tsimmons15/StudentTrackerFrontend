import { Routes, Route } from 'react-router-dom';
import App from '../App';
import DataView from '../containers/data-view/data-view';
import SeatView from '../containers/seat-view/seat-view';
import NotFound from '../containers/not-found/not-found';
import HomeView from '../containers/home-view/home-view';


export const AppRoutes: React.FC<unknown> = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<HomeView />} />
            <Route path="data" element={<DataView />} />
            <Route path="seating" element={<SeatView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
)