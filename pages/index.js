import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home(){
  return (
    <Layout>
      <Head>
        <title>Agro Predict Documentation • APM Docs</title>
        <meta name="description" content="Developer and investor documentation for Agro Predict decentralized prediction markets." />
        <meta property="og:title" content="Agro Predict Documentation" />
        <meta property="og:description" content="Agro Predict decentralized agriculture prediction documentation." />
      </Head>

      <header className="mb-6">
        <h1 className="text-3xl font-bold header-gold">Agro Predict Documentation</h1>
        <p className="text-muted mt-2">Dark hybrid • Green • Gold — Developer & Investor docs</p>
      </header>

      <section id="overview" className="prose">
        <h2>Executive Summary</h2>
        <p>Agriculture in emerging markets suffers from unpredictable weather, unstable commodity pricing...</p>
      </section>

      <section id="architecture" className="mt-8 prose">
        <h2>Architecture</h2>
        <p>MarketFactory.sol, PredictionMarket.sol, APMToken.sol, oracles, IPFS storage, backend indexer.</p>
      </section>

      <section id="tokenomics" className="mt-8 prose">
        <h2>Tokenomics</h2>
        <div className="card">
          <table className="w-full text-left">
            <thead className="text-white/80">
              <tr><th>Category</th><th>Percentage</th></tr>
            </thead>
            <tbody className="text-white">
              <tr><td>Public Sale / IDO</td><td>20%</td></tr>
              <tr><td>Ecosystem Incentives</td><td>35%</td></tr>
              <tr><td>Team</td><td>12%</td></tr>
              <tr><td>Liquidity</td><td>10%</td></tr>
              <tr><td>Treasury</td><td>13%</td></tr>
              <tr><td>Partnerships</td><td>10%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="smart-contracts" className="mt-8 prose">
        <h2>Smart Contracts</h2>
        <p>Include contract addresses, ABIs, and security notes here.</p>
      </section>

      <section id="oracles" className="mt-8 prose">
        <h2>Oracles</h2>
        <p>Weather data providers, commodity price feeds, redundancy model.</p>
      </section>

      <section id="roadmap" className="mt-8 prose">
        <h2>Roadmap</h2>
        <p>Phase 1: Smart contract development, testnet...</p>
      </section>

      <section id="faq" className="mt-8 prose">
        <h2>FAQ</h2>
        <p>Common questions and integration tips.</p>
      </section>

    </Layout>
  )
    }
