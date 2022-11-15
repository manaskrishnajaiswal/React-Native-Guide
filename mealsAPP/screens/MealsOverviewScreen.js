import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const catID = route.params.categoryID;
  //   console.log(catID);
  return (
    <View>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
