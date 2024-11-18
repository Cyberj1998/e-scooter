import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import Hero from './components/Hero'
import Configurator from './components/Configurator'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Opinions from './components/Opinions'
import Footer from './components/Footer'



function App() {
  return (
    <main className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Hero />
              <Features />
              <Pricing />
              <FAQ />
              <Opinions />
              <Footer />
            </>
          }>
          </Route>
          <Route path='/config' element={
            <>
              <SecondHeader />
              <Configurator />
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}




export default App
