import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// import Greeting from "../components/Greeting";
import "./App.css";

function App() {
  // constructor() {
  //   super();

  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);
  // const [title, setTitle] = useState("Mike");

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);
  const onSearchChange = (e) => {
    // this.setState({
    //   searchfield: e.target.value,
    // });
    setSearchfield(e.target.value);
  };

  // const onTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // const { robots, searchfield } = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (!robots.length) {
    // another way of looking at it: if (robots.length === 0)
    return <h1 className="tc">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <SearchBox searchChange={onSearchChange} />
        {/* <Greeting titleChange={onTitleChange} title={title} /> */}
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
