import Card from "../../components/UI/Card";
import { cards } from "../../DummyData/CardSData";
import styles from "../../styles/theme/main.module.scss";

const CardSection = () => {
  return (
    <div className={styles["cards--section"]}>
      {cards.map((card, index) => (
        <Card
          index={index}
          title={card.title}
          description={card.description}
          image={card.imageUrl}
          key={index}
        />
      ))}
    </div>
  );
};
export default CardSection;
