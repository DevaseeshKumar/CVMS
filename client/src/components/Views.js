import React, { useState, useEffect, useRef } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const View = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchUrl = useRef(null);

  useEffect(() => {
    if (selectedOption) {
      fetchUrl.current = http//localhost:3500/${selectedOption.toLowerCase()};
      setLoading(true);
      setError(null);

      fetch(fetchUrl.current)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          setData(responseData);
        })
        .catch((error) => {
          setError(`Error fetching data: ${error.message}`);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [selectedOption]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Box sx={{ maxWidth: 300 }}>
      <br />
      <br />
      <Autocomplete
        id="search-box"
        options={['Students', 'Counsellors', 'Visitors']}
        renderInput={(params) => (
          <TextField {...params} label="Select" variant="outlined" color="primary" />
        )}
        onChange={(e, value) => handleSelect(value)}
        disablePortal
        fullWidth
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <Card key={index} sx={{ marginTop: '20px', backgroundColor: '#f39c12' }}>
              <CardContent>
                {Object.entries(item).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Box>
  );
};

export default View;