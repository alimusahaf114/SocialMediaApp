import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import CreatePost from "./Component/CreatePost";
import PostList from "./Component/PostList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PostListProvider from "./Store/Post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
