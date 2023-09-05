import "./Component.css";

const Component = ({ color = "green" }) => {
  return (
    <div className={`component ${color}`}>
      <h1>Hello Component</h1>
    </div>
  );
};

export default Component;
