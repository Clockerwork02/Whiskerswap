# WhiskerSwap - HyperEVM DEX Aggregator

## Overview

WhiskerSwap is a sophisticated decentralized exchange aggregator built for the HyperEVM ecosystem. The application provides seamless token swapping, liquidity provision, and a comprehensive points/rewards system. It's designed as a full-stack TypeScript application with React frontend and Express backend, using Drizzle ORM for database operations and ethers.js for blockchain interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
- **Frontend**: React with TypeScript, located in `/client`
- **Backend**: Express.js with TypeScript, located in `/server`
- **Shared**: Common schemas and types in `/shared`
- **Database**: PostgreSQL with Drizzle ORM
- **Blockchain**: HyperEVM (Chain ID 999) integration via ethers.js

### Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Radix UI, Wouter (routing)
- **Backend**: Express.js, TypeScript, Drizzle ORM
- **Database**: PostgreSQL with Neon serverless
- **Blockchain**: ethers.js v6, HyperEVM network
- **Build Tools**: Vite, ESBuild
- **Deployment**: Vercel-compatible configuration

## Key Components

### Frontend Architecture
- **Component Library**: Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom color scheme and responsive design
- **State Management**: TanStack Query for server state, React hooks for local state
- **Wallet Integration**: Direct browser wallet connection supporting MetaMask, OKX, Trust Wallet
- **Routing**: Wouter for client-side routing

### Backend Architecture
- **API Design**: RESTful endpoints for eligibility checks, transfers, and points system
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Storage Pattern**: Interface-based storage with in-memory fallback for development
- **Error Handling**: Comprehensive error handling with proper HTTP status codes

### Blockchain Integration
- **Network**: HyperEVM (Chain ID 999) with multiple RPC endpoints
- **Token Support**: Native HYPE, WHYPE, and various ERC20 tokens (PURR, USD₮0, BUDDY, etc.)
- **DEX Integration**: HyperSwap V2/V3 router compatibility
- **Gas Management**: Fixed gas configurations optimized for HyperEVM

## Data Flow

### User Journey
1. **Wallet Connection**: Direct browser wallet integration with network switching
2. **Token Selection**: Token picker with logo support and balance display
3. **Swap Execution**: Multi-step process with approvals and transaction execution
4. **Points System**: Automatic point allocation based on swap volume
5. **Liquidity Operations**: Add/remove liquidity with real-time pool data

### Database Schema
- **users**: Basic user authentication (currently unused)
- **eligibility_checks**: Wallet eligibility tracking
- **wallet_transfers**: Transaction history and status
- **user_points**: Points balance and referral system
- **points_history**: Detailed points transaction log

### API Endpoints
- `POST /api/eligibility/check` - Check wallet eligibility
- `GET /api/eligibility/:walletAddress` - Get eligibility status
- `POST /api/transfers` - Create wallet transfer record
- `GET /api/points/:walletAddress` - Get user points
- `POST /api/points/swap` - Add swap points
- `POST /api/points/referral` - Handle referral bonuses

## External Dependencies

### Blockchain Networks
- **HyperEVM**: Primary network (Chain ID 999)
- **RPC Endpoints**: Multiple endpoints for redundancy
- **Block Explorers**: HyperEVM explorer integration

### Token Contracts
- **HYPE**: Native token (0x0000...0000)
- **WHYPE**: Wrapped HYPE (0x9b498C3c8A0b8CD8BA1D9851d40D186F1872b44E)
- **PURR**: Community token (0x1F53bFCC97C63BFCF95C08d16C0D3d1ec82E5f8b)
- **USD₮0**: Stablecoin (0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb)

### External Services
- **Neon Database**: PostgreSQL hosting
- **DexScreener**: Token logo and metadata
- **HyperSwap**: DEX router contracts

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with hot reload
- **Database**: Environment-based connection string
- **Blockchain**: Direct RPC connection to HyperEVM

### Production
- **Frontend**: Vercel deployment with Vite build
- **Backend**: Express server with ESBuild compilation
- **Database**: Neon serverless PostgreSQL
- **Environment**: Production-optimized settings

### Build Process
1. **Client Build**: Vite builds React app to `/dist/public`
2. **Server Build**: ESBuild compiles Express app to `/dist`
3. **Database Migration**: Drizzle schema push to PostgreSQL
4. **Asset Optimization**: Tailwind CSS purging and optimization

### Configuration Files
- **Vite**: Frontend build configuration with path aliases
- **TypeScript**: Strict mode with path mapping
- **Tailwind**: Custom color scheme and responsive breakpoints
- **Drizzle**: Database schema and migration configuration

The application uses a modern development workflow with TypeScript throughout, comprehensive error handling, and a clean separation of concerns between frontend, backend, and blockchain integration layers.