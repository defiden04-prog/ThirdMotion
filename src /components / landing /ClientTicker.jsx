import React from 'react';

const clients = [
  { name: 'George Janko', type: 'text' },
  { name: 'SurfCash', img: 'https://framerusercontent.com/images/sThsoR0d3ITeeZoVRqBtuVy4SOo.png', type: 'img' },
  { name: 'sanctum', type: 'text' },
  { name: 'BULK', type: 'text' },
  { name: 'David Guetta', type: 'text' },
  { name: 'Magic Eden', type: 'text' },
  { name: 'SuperVerse', type: 'text' },
  { name: 'Gamer Supps', type: 'text' },
  { name: 'boba', type: 'text' },
  { name: 'BananaGun', type: 'text' },
];

function ClientItem({ client }) {
  if (client.type === 'img') {
    return (
      <img src={client.img} alt={client.name} className="h-5 object-contain opacity-40 grayscale" />
    );
  }
  return (
    <span className="text-sm font-semibold text-foreground/30 tracking-wide">
      {client.name}
    </span>
  );
}

export default function ClientTicker() {
  const all = [...clients, ...clients, ...clients];

  return (
    <section className="py-5 overflow-hidden border-t border-border">
      <div className="flex items-center gap-6 px-6 md:px-12">
        <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest whitespace-nowrap shrink-0 mr-2">
          Happy Clients
        </span>
        <div className="overflow-hidden flex-1 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex items-center gap-12 animate-ticker">
            {all.map((client, i) => (
              <ClientItem key={i} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
