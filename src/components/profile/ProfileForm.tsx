import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ProfileData {
  name: string;
  age: string;
  title: string;
}

export function ProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProfileData>({
    name: '',
    age: '',
    title: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the profile data
    navigate('/');
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-[#2a2f3a] rounded-full flex items-center justify-center mb-2">
          <Camera className="w-8 h-8 text-gray-400" />
        </div>
        <p className="text-sm text-gray-400">
          Upload a photo for us to easily identify you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name..."
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm text-gray-400 mb-1">
            Your Age
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
            className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="i.e. 34"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm text-gray-400 mb-1">
            Your Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full bg-[#2a2f3a] rounded-lg px-4 py-3 text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What is your position?"
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
        Complete Profile
      </Button>

      <button
        type="button"
        onClick={handleSkip}
        className="w-full text-gray-400 hover:text-gray-300 py-2"
      >
        Skip for Now
      </button>
    </form>
  );
}