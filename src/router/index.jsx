import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Homepage from '../pages/Homepage';
import Authpage from '../pages/AuthPage';
import BookDescriptionPage from '../pages/BookDescriptionPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/book-description-page/:id" element={<BookDescriptionPage />} />
      </Routes>
    </>
  );
};

export default Router;
