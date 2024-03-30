import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Replace 'makeStyles' with 'styled' for MUI v5
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const TAF = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'abc', category: 'Parent' },
    { id: 2, name: 'pqr', category: 'Visitor' },
    { id: 3, name: 'xyz', category: 'Parent' },
    { id: 4, name: 'stv', category: 'Parent' },
    { id: 5, name: 'klmn', category: 'Visitor' },
    // ... other items
  ]);

  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Replace 'makeStyles' with 'styled' for MUI v5
  // const useStyles = makeStyles((theme) => ({
  const CardWrapper = styled(Card)({
    margin: '10px',
    minWidth: '200px',
  });

  const renderCard = ({ id, name, category }) => (
    // Replace 'makeStyles' with 'styled' for MUI v5
    // <Card key={id} style={{ margin: '10px', minWidth: '200px' }}>
    <CardWrapper key={id}>
      <CardContent>
        <p>Name: {name}</p>
        <p>Category: {category}</p>
      </CardContent>
    </CardWrapper>
  );

  const handleFilterByCategory = (category) => {
    if (category === 'All') {
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    handleFilterByCategory(category);
  };

  return (
    <div>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select category' }}
      >
        <MenuItem value="" disabled>
          Select Category
        </MenuItem>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Parent">Parent</MenuItem>
        <MenuItem value="Visitor">Visitor</MenuItem>
      </Select>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredItems.length > 0
          ? filteredItems.map(renderCard)
          : items.map(renderCard)}
      </div>
    </div>
  );
};

export default TAF;
