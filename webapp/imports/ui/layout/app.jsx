import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Router from '../components/routes/route.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// App component - represents the whole app
const App = () => (
  <div>
    <Header />
    <Router />
    <Footer />
  </div>
)

export default App
