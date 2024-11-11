import PropTypes from "prop-types";
import styles from "./TestButton.module.css";

function TestButton({ bgColor }) {
  return (
    <>
      <button className={styles[bgColor]}>{bgColor}</button>
    </>
  );
}

TestButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default TestButton;
