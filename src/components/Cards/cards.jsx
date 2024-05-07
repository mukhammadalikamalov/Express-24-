import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useState } from "react";

const styles = {
  cardCarousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  card: {
    margin: "8px",
    borderRadius: "8px",
    width: "186px",
    height: "120px",
    maxWidth: "lg", // Added maxWidth property
  },
  button: {
    margin: "8px",
  },
  carouselTitle: {
    textAlign: "center",
  },
};

const stylesForDoKonlar = {
  ...styles,
  cardCarousel: {
    ...styles.cardCarousel,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  card: {
    ...styles.card,
    width: "226px",
    margin: "8px",
    borderRadius: "8px",

    height: "130px",
    maxWidth: "lg",
  },
};

const CardCarousel = ({ cards, title, customStyles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div style={customStyles.cardCarousel}>
      <h2 style={styles.carouselTitle}>{title}</h2>
      <div style={styles.cardContainer}>
        <Button onClick={prevCard} style={styles.button}>
          <ArrowBackIosIcon />
        </Button>
        {cards.map((card, index) => (
          <div key={index} className={index >= currentIndex && index < currentIndex + 6 ? "active" : "inactive"}>
            <img
              src={card.imageUrl}
              alt={card.title}
              style={{
                ...customStyles.card,
                display: index >= currentIndex && index < currentIndex + 6 ? "block" : "none",
              }}
            />
          </div>
        ))}
        <Button onClick={nextCard} style={styles.button}>
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    imageUrl: "https://media.express24.uz/r/567/385/R_aaB0phKV098UwDToro4.jpg",
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    imageUrl: "https://media.express24.uz/r/567/385/LzYBM-UsUDl61DdUfFc1N.jpg",
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    imageUrl: "https://media.express24.uz/r/567/385/Pi8u9QkPOYqpvUXKnkrqH.jpg",
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    imageUrl: "https://media.express24.uz/r/567/385/lNuHeyO53tPP_VZGlC1G7.jpg",
  },
  {
    title: "Card 5",
    description: "Description for Card 5",
    imageUrl: "https://media.express24.uz/r/567/385/k5-hhzjHJVcaBra_U_2cK.jpg",
  },
  {
    title: "Card 6",
    description: "Description for Card 6",
    imageUrl: "https://media.express24.uz/r/567/385/oQmtRo2f1XlUPzr6kzI7Z.jpg",
  },
  {
    title: "Card 7",
    description: "Description for Card 7",
    imageUrl: "https://media.express24.uz/r/567/385/oQmtRo2f1XlUPzr6kzI7Z.jpg",
  },
  {
    title: "Card 8",
    description: "Description for Card 8",
    imageUrl: "https://media.express24.uz/r/567/385/oQmtRo2f1XlUPzr6kzI7Z.jpg",
  },
  {
    title: "Card 9",
    description: "Description for Card 9",
    imageUrl: "https://media.express24.uz/r/567/385/oQmtRo2f1XlUPzr6kzI7Z.jpg",
  },
];

const doKonlarCards = [
  {
    title: "Do'kon 1",
    description: "Description for Do'kon 1",
    imageUrl: "https://cdn.express24.uz/i/700/700/lPn1QcFACCII0oQT-Y_Cc.jpg",
  },
  {
    title: "Do'kon 2",
    description: "Description for Do'kon 2",
    imageUrl: "https://cdn.express24.uz/i/700/700/cpqAhjWqY-5jlMOwdKK3g.jpg",
  },
  {
    title: "Do'kon 1",
    description: "Description for Do'kon 1",
    imageUrl: "https://cdn.express24.uz/i/700/700/XL-rGrNx4AfpDsVtX6h6g.jpg",
  },
  {
    title: "Do'kon 2",
    description: "Description for Do'kon 2",
    imageUrl: "https://cdn.express24.uz/i/700/700/tWPICLSrlp05wEsdHWVBj.jpg",
  },
  {
    title: "Do'kon 2",
    description: "Description for Do'kon 2",
    imageUrl: "https://cdn.express24.uz/i/700/700/XWvkkRresoyqSvZhKEA1a.jpg",
  },
];

const App = () => {
  return (
    <div>
      <CardCarousel cards={cards} title="" customStyles={styles} />

      <h1 style={{ paddingLeft: "12%" }}>Do'konlar</h1>
      <CardCarousel cards={doKonlarCards} title="" customStyles={stylesForDoKonlar} />
    </div>
  );
};

export default App;
