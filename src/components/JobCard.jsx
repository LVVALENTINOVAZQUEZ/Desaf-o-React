import { useState } from 'react';

const JobCard = ({ job, candidate, onApply }) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!repoUrl) return alert("Por favor, ingresá la URL de tu repo");

    setStatus('loading');
    const payload = {
      uuid: candidate.uuid,
      jobId: job.id,
      candidateId: candidate.candidateId,
      repoUrl: repoUrl
    };

    try {
      const result = await onApply(payload);
      if (result.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div style={cardStyle}>
      <h3>{job.title}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="url" 
          placeholder="https://github.com/usuario/repo"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={status === 'success' || status === 'loading'}
          required
        />
        <button type="submit" disabled={status === 'success' || status === 'loading'}>
          {status === 'loading' ? 'Enviando...' : status === 'success' ? 'Enviado ✅' : 'Submit'}
        </button>
      </form>
      {status === 'error' && <p style={{color: 'red'}}>Hubo un error al postularse.</p>}
    </div>
  );
};

const cardStyle = { border: '1px solid #ccc', padding: '1rem', margin: '1rem 0', borderRadius: '8px' };

export default JobCard;