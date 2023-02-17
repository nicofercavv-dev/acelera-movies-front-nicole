import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import MoviePage from './pages/movie'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} exact />
        <Route path='/home' element={<HomePage />} exact/>
        <Route path='/movie/:id' element={<MoviePage />} exact />
      </Routes>
    </BrowserRouter>
  )
}
