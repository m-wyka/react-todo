import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
    >
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button disabled={!inputValue.length}>Dodaj</Button>
    </form>
  );
}
