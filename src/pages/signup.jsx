import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/api';    

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', address: '', role: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(form);
      if (data.token) {
        // Navigate to login or dashboard page after successful signup
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); 
      
      } else {
        alert(response.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full border p-2"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border p-2"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role (optional)"
          className="w-full border p-2"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
