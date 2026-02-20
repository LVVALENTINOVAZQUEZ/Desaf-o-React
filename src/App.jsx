import { useEffect, useState } from 'react';

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);

  // Aquí irá tu lógica de useEffect para el Step 2 y 3

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Challenge BotFilter</h1>
      {/* Aquí mapearás tus JobCards */}
    </div>
  );
}

export default App;