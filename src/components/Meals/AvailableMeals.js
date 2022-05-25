import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tom Yum Goong (Spicy Shrimp Soup)",
    description: "Thai's iconic bowl",
    price: 17.99,
  },
  {
    id: "m2",
    name: "Laab (Spicy Salad)",
    description: "Northeastern-style salad",
    price: 10.50,
  },
  {
    id: "m3",
    name: "Pad Krapow (Fried Basil)",
    description: "Stir-fried with Thai basil and plenty of chillies",
    price: 13.99,
  },
  {
    id: "m4",
    name: "Kao Niew Ma Muang (Mango and Sticky Rice)",
    description: "Sticky rice, mango slices, and lashings of sweet condensed milk",
    price: 15.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
