import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#1c1f26]">
      <h1 className="text-2xl font-bold text-white">ES Studies</h1>
      <button 
        onClick={handleProfileClick}
        className="text-white hover:text-gray-300 transition-colors"
      >
        <UserCircle className="w-6 h-6" />
      </button>
    </header>
  );
}