import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthentication } from '@/contexts/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const isAuthenticated = checkAuthentication();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default Index;
