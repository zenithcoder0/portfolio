import './App.css'
import TrackerImage from './assets/Initiative-Tracker.png'
import BasicCard from './components/Card';

const cardData = [
  {title: "Initiative Tracker", 
    summary: "The Initiative Tracker is a tool to simplify and accelerate combat encounters in tabletop role-playing games like Dungeons & Dragons.\nThis web-based application allows Game Masters to enter and manage multiple combatants quickly, ensuring fair and accurate turn order resolution.", 
    link: "https://zenithcoder0.github.io/initiative-tracker/", 
    image: TrackerImage},
  {title: "Initiative Tracker 2", summary: "Revisited iniative tracker,", link: "https://zenithcoder0.github.io/initiative-tracker-2/",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",},
  {title: "Inventory Tracker", summary: "In Progress", link: "",}
];

function App() {
  return (
    <>
      <div>Heres my stuff. This is a work in progress</div>
      <section className="cards-container">
        {cardData.map((item, index) => (
          <BasicCard 
          key={index}
          title={item.title}
          summary={item.summary}
          link={item.link}
          image={item.image}
          />
        ))}
      </section>
    </>
  )
}

export default App
