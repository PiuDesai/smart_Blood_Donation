import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="font-sans">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-red-700 text-white">
        <h2 className="text-xl font-bold">🩸 Smart Blood Donation</h2>
        <nav className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Donate</a>
          <a href="#" className="hover:underline">Request</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-red-50">
        <h1 className="text-4xl font-bold mb-4 text-red-700">
          Donate Blood, Save Lives ❤️
        </h1>
        <p className="text-lg mb-6">
          Your one donation can save up to 3 lives.
        </p>
        <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800">
          Become a Donor
        </button>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Why Donate?</h3>
          <p>Blood donation helps patients in emergencies and surgeries.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Who Can Donate?</h3>
          <p>Healthy individuals aged 18–65 can donate blood.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Need Blood?</h3>
          <p>Find donors quickly and request blood easily.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white text-center py-4">
        <p>© 2026 Smart Blood Donation | Save Lives 🩸</p>
      </footer>

    </div>
  );
}

export default App;