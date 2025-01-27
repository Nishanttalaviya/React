import Person from "./components/Person_functionComponent";
import PersonDefaultDemo from "./components/DefaultProp";
function App() {
  const PersonInfo={ firstname: "Nishant", lastname: "Talaviya"}
  const PersonJobInfo={ designation:"sr. front end developer",experince: 3}

  return (
    <>
    <PersonDefaultDemo/>
    <Person personData={PersonInfo} personJobData={PersonJobInfo} />
    </>
  );
}

export default App;
