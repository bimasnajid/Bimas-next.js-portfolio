import React from 'react';
import { useRouter } from 'next/router';

const LearnMoreButton: React.FC = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/about'); // Mengarahkan ke halaman About
  };

  return (
    <button onClick={handleLearnMore} className="learn-more-button">
      Learn More
    </button>
  );
};

export default LearnMoreButton;
