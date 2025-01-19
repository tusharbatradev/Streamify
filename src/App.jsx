import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import "./index.css";
import store from "./Utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Body />
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
