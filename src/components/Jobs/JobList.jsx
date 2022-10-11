import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import jobs from '../../data/data'

const JobList = () => {
  const [jobData, setJobData] = useState(jobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchByLocation, setSearchByLocation] = useState('');
  const searchTermValue = searchTerm.toLowerCase();

  const locationSearchHandler = () => {
    const filteredData = jobs.filter(job => job.location.toLowerCase().includes(searchByLocation.toLowerCase()));
    setJobData(filteredData);
  }

// ============ Filter Data ===========
  const filterJobData = e => {
    const filterValue = e.target.value;
    if(filterValue === 'full-time') {
      const filterData = jobs.filter(job => job.contract === 'Full Time');
      setJobData(filterData);
    } else if(filterValue === 'part-time') {
      const filterData = jobs.filter(job => job.contract === 'Part Time');
      setJobData(filterData);
    } else if(filterValue === 'freelance') {
      const filterData = jobs.filter(job => job.contract === 'Freelance');
      setJobData(filterData);
    } else if(filterValue === 'contract') {
      const filterData = jobs.filter(job => job.contract === 'Contract');
      setJobData(filterData);
    }
  }
  return (
    <section className="job__list">
      <div className="container">
        <div className="job__list__wrapper">
            <div className="search__panel">
              <div className="search__panel-01">
                <span><i className="ri-search-line"></i></span>
                <input type="text" placeholder='Search by title, companies' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="search__panel-02">
                <span><i className="ri-map-pin-line"></i></span>
                <input type="text" placeholder='Search by location' value={searchByLocation} onChange={e => setSearchByLocation(e.target.value)} />
                <button className='btn' onClick={locationSearchHandler}>Search</button>
              </div>
              <div className="search__panel-03">
                <select onChange={filterJobData}>
                  <option>Filter job by</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="freelance">Freelance</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>
            <div className="jobs__wrapper">
              {
                jobData?.filter(job => {
                  if (searchTerm === '') return job
                  if (
                    job.position.toLowerCase().includes(searchTermValue)
                    || 
                    job.company.toLowerCase().includes(searchTermValue)){
                    return job
                  }
                }).map(item => (
                  <div className="job__item" key={item.id}>
                    <img src={item.logo} alt="" />
                    <div className="job__content">
                      <h6>{item.postedAt} - {item.contract}</h6>
                      <h1><Link to={`/dev-jobs/jobs/${item.position}`}>{item.position}</Link></h1>
                      <p>{item.company}</p>
                      <div className="location">
                        <p>Location: <span>{item.location}</span></p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </div>
    </section>
  )
}
export default JobList;