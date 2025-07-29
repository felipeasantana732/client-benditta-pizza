'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loadTrackingScripts } from '@/lib/analytics/loadTrackingScripts';

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerText = styled.p`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.95rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #fff;
  color: #000;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #ddd;
  }

   &.recusar {
    background-color: #000;
    color: #fff;
  }

  &.aceitar {
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
  }
`;

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookiesConsent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'true') {
      loadTrackingScripts();
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookiesConsent', String(accepted));
    if (accepted) {
      loadTrackingScripts();
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <BannerContainer>
      <BannerText>
        🍪 Este site usa cookies para melhorar sua experiência. Ao continuar, você concorda com o uso de cookies.
      </BannerText>
      <ButtonGroup>

        <Button className='aceitar' onClick={() => handleConsent(false)}>Recusar</Button>
        <Button className='recusar' onClick={() => handleConsent(true)}>Aceitar</Button>
       
      </ButtonGroup>
    </BannerContainer>
  );
};

export default CookieConsentBanner;
