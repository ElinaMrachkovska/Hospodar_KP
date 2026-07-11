import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import ServicesOverview from './pages/ServicesOverview/ServicesOverview'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import Contacts from './pages/Contacts/Contacts'
import LandscapeBanner from './components/LandscapeBanner/LandscapeBanner'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/poslugy" element={<ServicesOverview />} />
        <Route path="/poslugy/:slug" element={<CategoryPage />} />
        <Route path="/kontakty" element={<Contacts />} />
        <Route path="/landscape-banner" element={<LandscapeBanner />} />
      </Route>
    </Routes>
  )
}
