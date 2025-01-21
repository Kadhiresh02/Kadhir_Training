import logo from './logo.svg';
import './App.css';
// import ChildComp from './components/ChildComp';
import ClassComp from './components/ClassComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import EmpDetails from './components/EmpDetails';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import EventComp from './components/EventComp';
import FuncComp from './components/FuncComp';
import MultipleImageComp from './components/MultipleImageComp';
import MyimagesComp from './components/MyimagesComp';
import MyStateComp from './components/MyStateComp';
import ParentComp from './components/ParentCom';
import ToggleImageComp from './components/ToggleImageComp';
import UserComp from './components/UserComp';
import VirtualDOM from './components/VirtualDOM';
import ClickCounterComp from './task/ClickCounterComp';
import CounterTask from './task/CounterTask';
import HoverCounterComp from './task/HoverCounterComp';
import KadhirFunComp from './task/Kadhir';
import LoginComp from './Layout/LoginComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Hello World!!</h1> */}
      {/* <FuncComp fname="Panchasil" post="Java Developer" /> 
      <KadhirFunComp fname="Kadhir" lname="Selva" salary={70000} gender="Male" address="Tiruppur" />
      <ClassComp fname="Rahul" post="Developer"/> */}


      {/* <EventComp /> */}

      {/* <MyStateComp /> */}

      {/* <ConditionalRenComp/> */}
      {/* <CssComp/>
        <FuncComp/> */}
      {/* <CounterTask/> */}
      {/* <ParentComp gender="Male" contact={6782343}/> */}
      {/* <ChildComp/> */}


      {/* <ClickCounterComp/>

        
        <HoverCounterComp/> */}
      {/* <MyimagesComp/> */}

      {/* <UserComp name={"Kadhir"} id={101}/> */}

      {/* <ErrorBoundaryComp>
        <UserComp user="Rahul" />
      </ErrorBoundaryComp>

      <ErrorBoundaryComp>
        <UserComp user="Vinay" />
      </ErrorBoundaryComp>

      <ErrorBoundaryComp>
        <UserComp user="Arun" />
      </ErrorBoundaryComp>

      <ErrorBoundaryComp>
        <UserComp user="Virat" />
      </ErrorBoundaryComp> */}



      {/* <VirtualDOM/>

      <ToggleImageComp/> */}

      {/* <MultipleImageComp/>
      <EmpDetails/> */}
      {/* <LoginComp/> */}
    </div>
  );
}

export default App;
