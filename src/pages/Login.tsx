import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { LoginForm } from '@/components/auth/LoginForm';
import { WaveDecoration } from '@/components/auth/WaveDecoration';

export function Login() {
  return (
    <div className="min-h-screen bg-[#1c1f26] text-white flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">ES Studies</h1>
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome back</h2>
        <p className="text-gray-400 text-center mb-8">
          Login to access your account below.
        </p>
        
        <LoginForm />
        
        <div className="mt-6 text-center">
          <button className="text-gray-400 hover:text-gray-300 transition-colors">
            Continue as Guest
          </button>
        </div>
      </div>
      
      <WaveDecoration />
    </div>
  );
}