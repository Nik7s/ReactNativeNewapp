import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";

const SingleNews = ({ item, index }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />
      <View style={{ ...styles.description, backgroundColor: "#282C35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>    
          Short by  
          <Text> {item.author ?? "unknown"}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white",
  },
  content: {
    fontSize: 18,
    paddingBottom: 10,
  },
});

export default SingleNews;
