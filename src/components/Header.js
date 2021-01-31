import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        {location.pathname === "/" && (
          <Button
            color={showAddTask ? "grey" : "green"}
            text={showAddTask ? "Close" : "Add"}
            onClick={onAdd}
          />
        )}
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
