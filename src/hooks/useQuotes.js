import { useEffect, useState } from 'react';

function useQuotes() {
  const [quote, setQuote] = useState(null);     
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);       

  useEffect(() => {
    const fetchQuote = async () => {
    const apiKey = 'hRsTFMJ/ZBHKV9fkaNSMSg==1F93nPQWsjqqiTXP'
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Api-Key': apiKey
        };

        const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers,
        });

        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        setQuote(data[0]);  
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return { quote, loading, error };
}

export default useQuotes;
