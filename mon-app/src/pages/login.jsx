const [formData, setFormData] = useState({
  email: '',
  password: '',
});
const [message, setMessage] = useState('');
const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('/register', formData); 
    setMessage("connexion réussie");
    console.log(res.data);
  } catch (error) {
    console.error(error.response?.data);
    setMessage("erreur");
  }
};
await axios.post('/login', formData);
return (
  <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Créer un compte</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input type="password" id="password" name="password" required
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <button type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200">
            Se connecter
          </button>
        </div>

        {message && (
          <p className="text-center text-sm mt-4">{message}</p>
        )}
      </form>
    </div>
  </div>
);


export default Login;
