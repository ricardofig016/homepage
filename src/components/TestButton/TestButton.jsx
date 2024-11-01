import styles from "./TestButton.module.css";

function TestButton() {
  return (
    <>
      <p>hey this is a p</p>
      <button className={styles.button}>Click this button!</button>;
    </>
  );
}

export default TestButton;
