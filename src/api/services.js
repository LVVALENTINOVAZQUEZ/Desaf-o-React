const BASE_URL = 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api';

export const getCandidateData = async (email) => {
  const response = await fetch(`${BASE_URL}/candidate/get-by-email?email=${email}`);
  if (!response.ok) throw new Error('Error al obtener datos del candidato');
  return response.json();
};

export const getJobs = async () => {
  const response = await fetch(`${BASE_URL}/jobs/get-list`);
  if (!response.ok) throw new Error('Error al obtener vacantes');
  return response.json();
};

export const applyToJob = async (payload) => {
  const response = await fetch(`${BASE_URL}/candidate/apply-to-job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return response.json();
};