import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'


const cardData = [
  {title: "Initiative Tracker", summary: "The Initiative Tracker is a tool to simplify and accelerate combat encounters in tabletop role-playing games like Dungeons & Dragons.\nThis web-based application allows Game Masters to enter and manage multiple combatants quickly, ensuring fair and accurate turn order resolution.", link: "https://zenithcoder0.github.io/initiative-tracker/",},
  {title: "Initiative Tracker 2", summary: "Revisited iniative tracker,", link: "https://zenithcoder0.github.io/initiative-tracker-2/",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",}
];

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <div>Heres my stuff. This is a work in progress</div>
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
    </>
  )
}

export default App
