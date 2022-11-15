import React from "react";
import { Pressable, Text, View } from "react-native";

const CategoryGridTitle = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;
