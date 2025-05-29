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
  {title: "My Portfolio!", summary: "You're already here! :D", link: "https://zenithcoder0.github.io/portfolio/", image: Sisyphus},
 
];

function App() {
  return (
    <>
    <Navbar/>
      <section>
        <h1>ABOUT ME:</h1>
      <div>I'm a junior fullstack developer with a background in business analysis and a growing skillset in React, TypeScript, C#, and PostgreSQL. I’m actively building practical projects like an inventory management system and an initiative tracker to sharpen my end-to-end development skills. I’m not claiming mastery — I'm still learning, still breaking things, and still figuring out what kind of developer I want to be. But I ship, I debug, and I keep going.</div>
      <br/>
      <div>I aspire to become a machine learning engineer / data scientist. There's something magical about automating the data gathering process to help a business make informed decisions not off of guesses but by testing against their data. I'm actively learning Power BI to have a better way of visualizing data.</div>
      <div>As of now I don't have any projects in the works. But keep an eye out.</div>
      <br/> 
      <div>Outside of software, I dungeon master for dungeons and dragons. I also have a variety of handcraft hobbies: 3D Printing, Puzzles, Drawing, Perler Bead Art, Needle felting</div>
      <div>I like electronic sports or e-sports: CSGO/CS2. Astralis comeback?</div>
      <div>I like bees</div>
      </section>
      <section>
        <h1>MY SKILLS:</h1>
        <h3>Software Engineering</h3>
        <div>I like working in the frontend, specifically with react+typescript because of the type management and the visual ui. I'm working on sharpening my backend development skills but I have a long ways to go until I am satisfied with my skillset. I understand basic concepts and principles of cake slicing, its just a matter of doing so. Stick around and find out what I make. :D</div>
        <div>I can see the cake slice, just working on how to get the ingredients working together</div>
        <br/>
        <h3>Scrum Master:</h3>
        <div>Though I am not certified as a scrum master, I lead daily stand ups and conducted the scrum rituals: Sprint Retro, Sprint Review, Backlog Refinement, T-Shirt Sizing, Hunting down a developer's tickets they were working from. One of the hardest things to do is balance between taking 30 minutes for standup and updating business on features not yet defined. Just let me know if you got a blocker and we'll take it offline. If you don't update or work from your tickets, I'm coming for you.. </div>
        <h3>UIUX-Design:</h3>
        <div>I am a beginner when it comes to making wireframes and mock-ups. My goto solution for wireframing is Figma. I have 2 years of experience in making mock up requirements for UIUX. I try to keep the user workflow in mind with the visual aids I provide. Additionally, because I have development skills, I always consider the developers in mind and try to make designs based on scalability and not just creativity. Having a solid visual foundation allows the developers to scale components and keep a cleaner codebase.</div>
        <div>Note: Make components to speed this process up</div>
        <h3>Project Management</h3>
        <div>I am a beginner when it comes to project management. I have roughly 2 years of experience in project/product management. I have a certificate from PMI for Project Management Ready (PMR). Though this is not the PMI-PMP certificate most individuals look for, the PMI-PMR certificate prepared me for base project management skills. I have conducted multiple gap analysis, RAID analysis and scope management sessions. Also, who doesn't love a good dashboard or gantt chart? I provided visual aids and understanding to the current scope and workload the sprints had in JIRA.  Keeping all of this organized and document to account for system feature/functions. As a junior project/product manager, I acted as the primary liason between 2 teams working in different timezones: CST/EST/IST. One of the biggest challenges I had was ensuring that all moving pieces were actively aligned and engaged with each other across the teams. This accounted for 2 sets of each type of team: Development teams, QA teams, UIUX teams, BA teams, Business Stakeholders, DevOps. The team size total was roughly 30 individuals combined. Needless to say I learned alot by jumping into Project Management.</div>
        <h3>Business Analysis</h3>
        <div>As a junior fullstack developer one of the first features I was tasked to do was to create an insurance module...</div>
        <br/> 
        <div>Through fire and flames we delivered, but this feature sparked a light in me.</div>
        <div>Business Stakeholders were throwing requests over the wall and expecting immediate resolution within the week. So I stepped up to the challenge and bridged the gap. Knowing full well that my developer skills would dull. I excelled and sharpened my skills and understanding in business analysis. Working with business stakeholders and customers to determine the solutions they needed not wanted. We went from taking a month to deliver a feature function to delivering significant feature milestones almost weekly. I bridged the gap for the developers to have a truly agile process in the SDLC. I organized features/backlogs and ensured tickets were groomed and had correct feature functions with documentation attached. Because of my technical background I was able to work with tech-leads and business to properly t-shirt size feature tickets before throwing them into the backlog. While business and tech-leads finalized milestone goals I was already working on a figma mockup design. This sped up the process for tech-lead planning and business visual aid. Once this was completed tickets were ready to go whenever the priority called for the refined tickets.</div>
        <br/>
        <div>I truly enjoyed stepping up to the challenge in business analysis. It has defintely helped make me become a well rounded software engineer.</div>
        <h3>JIRA WIZARD</h3>
        <div>I am an Apprentice Jira Wizard. I use JIRA for a lot of my personal projects like house maintenance, chores, and software projects. I took up my wizard staff when I realized that the project I was working on didn't have a correct field or flow to our sdlc. So I got to work and started to decrypt the inner workings of JIRA. Long story short its blueprints for blueprints for blueprints. Aside from third party application tools to use in JIRA I am capable of whipping up an entiring project with workflows according to the business needs. Some would say you just need To-Do, In-Progress and Done. I say, lets support visbility and proper tracking of our progress.</div>
        <h3></h3>
        <div></div>
        <h3></h3>
        <div></div>
      </section>
      <section>
        <h1>MY PROJECTS:</h1>
        <div>Heres my stuff. This is a work in progress</div>
      </section>

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
