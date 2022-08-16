import React, { useState } from "react";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="egg-fried" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Egg Ball" />
          <List.Item title="Milk Sandwich" />
          <List.Item title="Toasted Prune" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Sludge Plate" />
          <List.Item title="Shrimp Carapace" />
          <List.Item title="Leftovers" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="pasta" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Grass Fed Mountain Lion Flank" />
          <List.Item title="Serbian Hair Salad" />
          <List.Item title="Peanut Butter and Clams Lasagna" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="bottle-wine" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Onion & Banana Juice" />
          <List.Item title="Room Temperature Fish Malt" />
          <List.Item title="Mobil 1 SAE 10W-30 Full Synthetic" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
