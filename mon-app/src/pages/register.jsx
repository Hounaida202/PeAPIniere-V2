import React, { useState } from 'react';
import axios from '../api/axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    role: '',
  });
  const [message, setMessage] = useState('');

  