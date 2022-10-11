import { Fragment } from 'react';
import './app.css';
import Header from './components/Header/Header';
import JobDetails from './components/Job-details/JobDetails';
import JobList from './components/Jobs/JobList';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/dev-jobs/'element={<Navigate to='/dev-jobs/jobs' />} />
        <Route path='/dev-jobs/jobs'element={<JobList />} />
        <Route path='/dev-jobs/jobs/:position'element={<JobDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;
