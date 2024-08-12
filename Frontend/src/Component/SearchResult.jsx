import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Cards from '../Component/Cards'; 
import '../Style/style1.css';
import Navbar from './Navbar';

const SearchResultsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false); // Track if a search has been performed
  const location = useLocation();
  
  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    const fetchData = async () => {
      setHasSearched(false);
      try {
        if (query) {
          const response = await axios.post('/api/user/search', { itemName: query });
          setItems(response.data.items || []);
        } else {
          const response = await axios.get('/api/user/all'); 
          setItems(response.data.items || []);
        }
        setHasSearched(true); 
      } catch (error) {
        console.error('Error fetching items:', error.response ? error.response.data : error.message);
        setError(error.response?.data?.message || 'An error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <div className="search-results-page">
        <h1>Search Results</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        <div className="card-container">
          {items.length > 0 ? (
            items.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          ) : (
            hasSearched && !loading && <p>No items found</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
