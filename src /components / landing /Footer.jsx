import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12">
      <p className="text-sm text-muted-foreground/50">
        LeonMotion {new Date().getFullYear()}
      </p>
    </footer>
  );
}
