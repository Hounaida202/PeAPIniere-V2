import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import PlantList from './components/PlantList';
import React, { useState } from 'react';

function App() {
  const [selectedCategorie, setSelectedCategorie] = useState(1);

  const handleChange = (e) => {
    setSelectedCategorie(e.target.value);
  };

  return (
    <Router>
      <Routes>
        {/* Route Register */}
        <Route path="/register" element={<Register />} />

        {/* Route Login */}
        <Route path="/login" element={<Login />} />

        {/* Route pour consulter les plantes */}
        <Route
          path="/plantes"
          element={
            <div>
              <header className="bg-green-600 p-4 text-white text-center text-2xl font-bold">
                🌿 Ma Boutique de Plantes
              </header>

              <div className="max-w-4xl mx-auto my-6 px-4">
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Choisissez une catégorie :
                </label>
                <select
                  onChange={handleChange}
                  value={selectedCategorie}
                  className="w-full p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value={1}>Intérieur</option>
                  <option value={2}>Extérieur</option>
                  <option value={3}>Zen</option>
                </select>
              </div>

              <PlantList categorieId={selectedCategorie} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
