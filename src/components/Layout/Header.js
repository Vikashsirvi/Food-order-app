import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
