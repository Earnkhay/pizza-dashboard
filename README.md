# Pizza Dashboard

A modern Next.js dashboard for pizza order management with Google authentication.

## Features

- Google OAuth authentication for secure login
- Dashboard with order statistics and metrics
- Pizza order management with filtering and sorting
- Responsive design for all device sizes
- Light and dark mode support

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Authentication**: NextAuth.js with Google provider
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hooks
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn
- Google OAuth credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pizza-dashboard.git
cd pizza-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Configure environment variables
   
Create a `.env.local` file in the root directory with the following:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

### Setting up Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Select "Web application" as the application type
6. Add your app's domain to the "Authorized JavaScript origins" (e.g., `http://localhost:3000`)
7. Add your redirect URI to "Authorized redirect URIs" (e.g., `http://localhost:3000/api/auth/callback/google`)
8. Click "Create" and note your Client ID and Client Secret

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project is set up for deployment on Vercel or Railway:

1. Connect your repository to Vercel/Railway
2. Set up the environment variables in your deployment platform
3. Deploy the application

## Project Structure

```
├── app/                 # Next.js app router
│   ├── api/             # API routes including NextAuth
│   ├── dashboard/       # Dashboard pages
│   └── ...              # Other pages
├── components/          # Reusable components
├── data/                # Mock data for the application
├── lib/                 # Utility functions and hooks
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```