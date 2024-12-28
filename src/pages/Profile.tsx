import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { ProfileForm } from '@/components/profile/ProfileForm';
import { WaveDecoration } from '@/components/auth/WaveDecoration';

export function Profile() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-[#1c1f26] text-white flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Complete Profile</h1>
        <ProfileForm />
      </div>
      <WaveDecoration />
    </div>
  );
}