import { Brand, CTA, NavBar } from "./components"
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from "./containers"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
