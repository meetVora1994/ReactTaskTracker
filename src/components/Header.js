import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAddTask ? "grey" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// // CSS in JS
// const headerStyle = {
//   color: "red",
// };

export default Header;
