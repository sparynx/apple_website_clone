import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
<<<<<<< HEAD
import { Analytics } from "@vercel/analytics/react"
=======

>>>>>>> e34f533a053ce78b2328d926e46f88ebfb52552c
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
<<<<<<< HEAD
      <Analytics />
=======
>>>>>>> e34f533a053ce78b2328d926e46f88ebfb52552c
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
