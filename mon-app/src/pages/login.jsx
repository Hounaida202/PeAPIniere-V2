const [formData, setFormData] = useState({
  email: '',
  password: '',
});
const [message, setMessage] = useState('');
const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};