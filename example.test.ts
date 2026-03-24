@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 4%;
    --foreground: 210 20% 92%;

    --card: 220 18% 8%;
    --card-foreground: 210 20% 92%;

    --popover: 220 18% 8%;
    --popover-foreground: 210 20% 92%;

    --primary: 172 66% 50%;
    --primary-foreground: 220 20% 4%;

    --secondary: 220 16% 14%;
    --secondary-foreground: 210 20% 85%;

    --muted: 220 14% 12%;
    --muted-foreground: 215 12% 50%;

    --accent: 260 60% 65%;
    --accent-foreground: 210 20% 95%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 14% 16%;
    --input: 220 14% 16%;
    --ring: 172 66% 50%;

    --radius: 0.75rem;

    --glow-primary: 172 66% 50%;
    --glow-accent: 260 60% 65%;

    --sidebar-background: 220 18% 6%;
    --sidebar-foreground: 210 20% 85%;
    --sidebar-primary: 172 66% 50%;
    --sidebar-primary-foreground: 220 20% 4%;
    --sidebar-accent: 220 14% 12%;
    --sidebar-accent-foreground: 210 20% 85%;
    --sidebar-border: 220 14% 16%;
    --sidebar-ring: 172 66% 50%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-body antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  ::selection {
    background: hsl(172 66% 50% / 0.3);
  }
}

@layer utilities {
  .text-gradient-primary {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, hsl(172 66% 50%), hsl(172 66% 70%));
  }

  .text-gradient-accent {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, hsl(260 60% 65%), hsl(300 60% 70%));
  }

  .text-gradient-hero {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(135deg, hsl(0 0% 100%), hsl(210 20% 70%));
  }

  .glow-primary {
    box-shadow: 0 0 60px -12px hsl(172 66% 50% / 0.4);
  }

  .glow-accent {
    box-shadow: 0 0 60px -12px hsl(260 60% 65% / 0.3);
  }

  .bg-grid {
    background-image: 
      linear-gradient(hsl(220 14% 16% / 0.5) 1px, transparent 1px),
      linear-gradient(90deg, hsl(220 14% 16% / 0.5) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .bg-noise {
    position: relative;
  }

  .bg-noise::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
}
