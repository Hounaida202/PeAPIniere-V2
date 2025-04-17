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
    const res = await axios.post('/register', formData); // 👈 ⚠️ erreur ici
    setMessage("connexion réussie");
    console.log(res.data);
  } catch (error) {
    console.error(error.response?.data);
    setMessage("erreur");
  }
};