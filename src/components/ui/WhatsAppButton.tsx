import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string; // e.g. +919876543210
  children: React.ReactNode;
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber,
  children,
  className = ''
}: WhatsAppButtonProps) {
  const defaultMessage = encodeURIComponent('Hi Dhaagaa, I want to build my brand.');
  const link = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${defaultMessage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // open in a new tab/window
    e.preventDefault();
    window.open(link, '_blank');
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={
        `inline-block px-8 py-4 rounded-full font-sans font-medium uppercase tracking-widest text-sm transition-colors duration-300 bg-foreground text-background hover:bg-accent hover:text-white ${className}`
      }
    >
      {children}
    </a>
  );
}
