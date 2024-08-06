import styles from "./Item.module.css"

const Item = (props) => {
  console.log(styles);
  return (
  <li key ={props.foodItem} className={`${styles['kg-item']}`}>
    <span className={styles["kg-span"]}>
{props.foodItem}    </span></li>
  );
};

export default Item;