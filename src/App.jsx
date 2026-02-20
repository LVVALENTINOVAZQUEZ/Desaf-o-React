import { useEffect, useState } from 'react';
import { getCandidateData, getJobs, applyToJob } from './api/services';
import JobCard from './components/JobCard';

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const MY_EMAIL = "valen3601@outlook.com"; 

  useEffect(() => {
    const initApp = async () => {
      try {
        const [candRes, jobsRes] = await Promise.all([
          getCandidateData(MY_EMAIL),
          getJobs()
        ]);
        setCandidate(candRes);
        setJobs(jobsRes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    initApp();
  }, []);

  if (loading) return <div>Cargando posiciones...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Open Positions</h1>
      <p>Bienvenido, <strong>{candidate?.firstName}</strong></p>
      <hr />
      {jobs.map(job => (
        <JobCard 
          key={job.id} 
          job={job} 
          candidate={candidate} 
          onApply={applyToJob} 
        />
      ))}
    </div>
  );
}

export default App;