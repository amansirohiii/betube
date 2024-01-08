import { Provider } from "react-redux";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import appStore from "./redux/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  }]);
  return (
    <div>
      <Provider store={appStore}>
        <Navbar />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
