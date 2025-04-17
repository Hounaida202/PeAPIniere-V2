
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const PlantList = ({ categorieId }) => {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');

  