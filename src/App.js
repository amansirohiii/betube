import { Provider } from "react-redux";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import appStore from "./redux/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Navbar/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
