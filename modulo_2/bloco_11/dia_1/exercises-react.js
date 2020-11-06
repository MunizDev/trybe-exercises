//Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

//React: Create a Complex JSX Element
const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);

//React: Add Comments in JSX
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* Test */}
  </div>
);

//React: Render HTML Elements to the DOM
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"));

//React: Define an HTML Class in JSX
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

//React: Learn About Self-Closing JSX Tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

//React: Create a Stateless Functional Component
const MyComponent = function () {
  return <div>Texto de retorno</div>;
};

//React: Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

//React: Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
