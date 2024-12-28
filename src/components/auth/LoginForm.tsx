import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { getAuthErrorMessage } from '@/utils/error-handlers';

export function LoginForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    church: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const success = await login(formData.email, formData.password, formData.church);
      if (!success) {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError(getAuthErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setError('');
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-2 rounded">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          placeholder="Enter your email..."
          className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white placeholder:text-gray-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-gray-400 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            placeholder="Enter your password..."
            className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white placeholder:text-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300
                     disabled:opacity-50"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="church" className="block text-sm text-gray-400 mb-1">
          Select church
        </label>
        <select
          id="church"
          name="church"
          value={formData.church}
          onChange={handleChange}
          disabled={loading}
          className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          required
        >
          <option value="">Select church...</option>
          <option value="church1">Church 1</option>
          <option value="church2">Church 2</option>
        </select>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
}