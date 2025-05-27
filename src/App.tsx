import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'


const cardData = [
  {title: "Initiative Tracker", summary: "Base html, css, js initiative tracker", link: "",},
  {title: "Initiative Tracker 2", summary: "Revisited iniative tracker,", link: "",},
  {title: "Inventory Tracker", summary: "", link: "",}
];

function App() {
  return (
    <>
      <Navbar/>
      <section style={{display: "flex", flexDirection: "row", gap: '1rem', justifyContent: 'center'}}>
        {cardData.map((item, index) => (
          <Card 
          key={index}
          title={item.title}
          summary={item.summary}
          link={item.link}
          />
        ))}
      </section>
      <div>Hello World</div>
    </>
  )
}

export default App
