# Charlia Agency — Landing Page

Landing page para Charlia Agency, showcaseando el agente de WhatsApp impulsado por IA.

## ¿Qué es Charlia?

Tu mejor aliado en WhatsApp. Un agente de IA que:
- Responde consultas de clientes 24/7
- Califica clientes automáticamente
- Agenda citas sin intervención
- Libera tu tiempo para que te enfoques en crecer

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Email**: Nodemailer (SMTP)
- **Icons**: Lucide React
- **Typography**: Fraunces (serif editorial)

## Setup Local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar email (SMTP)
Copia `.env.local.example` a `.env.local`:
```bash
cp .env.local.example .env.local
```

Sigue las instrucciones en `.env.local.example` para configurar Gmail o tu proveedor SMTP.

### 3. Dev server
```bash
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel

```bash
vercel --prod
```

El formulario de contacto enviará solicitudes a: `charlia.agency@gmail.com`

## Estructura

```
app/
├── page.tsx          # Landing page principal
├── layout.tsx        # Layout global
├── globals.css       # Estilos globales
└── api/
    └── contact/
        └── route.ts  # Endpoint para procesar formulario
```

## Paleta de Colores

- **Primario**: #6c44fc (Púrpura)
- **Fondo**: #000000 (Negro)
- **Texto**: #ffffff (Blanco)
- **Acentos**: rgba(108, 68, 252, 0.1-0.2)
