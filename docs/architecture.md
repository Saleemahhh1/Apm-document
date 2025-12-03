# Platform Architecture

Agro Predict’s technology stack combines blockchain, oracles, decentralized storage, and modern frontend technologies.

## 1. Smart Contracts
- **MarketFactory.sol:** deploys new prediction markets.  
- **PredictionMarket.sol:** handles predictions, staking, and reward distribution.  
- **APMToken.sol:** native utility token for market participation and rewards.

## 2. Frontend
- Built with **React + Next.js** for fast, responsive UI.  
- Supports wallet connections: **MetaMask** and **binance wallet**.

## 3. Oracles
- Integrates **weather oracles**.  
- Integrates **commodity price feeds**.  
- Supports **AI datasets** and **satellite data providers**.

## 4. Decentralized Storage
- Market metadata stored on **IPFS/Arweave** for immutability.

## 5. Backend Indexer
- **Event listener:** monitors blockchain events.  
- **Market resolver:** calculates market results.  
- **Query optimizer:** provides efficient access to prediction data.

**Architecture Diagram**  
*(Optional: Insert image of architecture or Mermaid diagram for web docs)*
