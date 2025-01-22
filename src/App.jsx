import { Provider } from "react-redux";
import Body from "./Components/Body";
import SearchPage from "./Components/SearchPage"
import "./index.css";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch/:videoId",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        }
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
        {
          // Head
          // Body
          //  SideBar
          //    MenuItems
          // MainContainer
          //    ButtonList
          //    VideoContainer
          //    VideoCard
        }
      </Provider>
    </>
  );
}

export default App;
