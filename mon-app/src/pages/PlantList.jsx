
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

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Plantes de la catégorie {categorieId}</h1>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={plant.image || 'https://via.placeholder.com/400x250?text=Plante'}
                alt={plant.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-green-800">{plant.nom}</h2>
                <p className="text-gray-600 mt-1">{plant.description}</p>
                <p className="text-sm mt-2 text-gray-500">Catégorie : {plant.categorie || 'Non précisée'}</p>
                <p className="text-lg font-bold text-green-700 mt-2">{plant.prix} €</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantList;
