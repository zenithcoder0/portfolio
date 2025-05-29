import './App.css'
import TrackerImage from './assets/Initiative-Tracker.png'
import TrackerImage2 from './assets/Intiiative-Tracker2.png'
import Sisyphus from './assets/Favicon.png'
import WIP from './assets/WIP.png'
import BasicCard from './components/Card';
import Navbar from './components/Navbar';

const cardData = [
  {title: "Initiative Tracker", 
    summary: "The Initiative Tracker is a tool to simplify and accelerate combat encounters in tabletop role-playing games like Dungeons & Dragons.\n\nThis web-based application allows Game Masters to enter and manage multiple combatants quickly, ensuring fair and accurate turn order resolution.", 
    link: "https://zenithcoder0.github.io/initiative-tracker/", 
    image: TrackerImage},
  {title: "Initiative Tracker 2", summary: "Version 2:\nA simple web app for managing turn order in tabletop RPGs.\n\nAdd characters, track initiative, update health, and progress rounds with ease.\n\nBuilt as a learning tool for game masters who want to spend less time tracking and more time playing.", link: "https://zenithcoder0.github.io/initiative-tracker-2/", image: TrackerImage2},
  {title: "CRUD Inventory", summary: "In Progress\nThis is going to be my first full-stack developed application.\n\n Potential Techstack:\nFrontend:Type\nBackend: C#\nDB: PostgreSQL\n\n\n I'll figure something out", link: "", image: WIP},
  {title: "My Portfolio!", summary: "You're already here! :D", link: "", image: Sisyphus},
 
];

function App() {
  return (
    <>
    <Navbar/>
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
