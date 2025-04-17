
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const PlantList = ({ categorieId }) => {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await axios.get(`/getplantes/${categorieId}`);
        setPlants(res.data.plantes); 
      } catch (err) {
        console.error(err);
        setError("errer");
      }
    };

    if (categorieId) {
      fetchPlants();
    }
  }, [categorieId]);

  