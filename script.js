// const root = document.querySelector("#root");
// const h2 = React.createElement("h2", {}, "JSX x Babel!");
// ReactDOM.createRoot(root).render(h2);

const root = document.querySelector("#root");

const userName = "Krishnapal Rajput";

const h2 = <h2 className="name">Hello <b>{userName}</b></h2>;
ReactDOM.createRoot(root).render(h2);
