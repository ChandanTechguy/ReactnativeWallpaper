import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
import { useRecoilState } from "recoil";
import Navbar from "./Navbar";

const Screen1 = ({ navigation }) => {
  const acess_key = "hZGtvuf-xpkY5ZiN4Z1-nL0JZY4JGAN7RN28g3YzoOc";
  const [searchvalue, setSearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagecollection, setImageCollection] = useState([]);
  // console.log(searchvalue)

  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${acess_key}`
      );
      let jsondata = await data.json();
      // console.log(jsondata)
      setImageCollection(jsondata);
    };
    getimagecollection();
  }, [searchvalue]);

  console.log(imagecollection);
  imagecollection.total == 0 && setSearchvalue("all");

  const ShowWallpaper = (item) => {
    // console.log(item);
    navigation.navigate("Back", { clickedimage: `${JSON.stringify(item)}` });
  };

  return (
    <View style={styles.container}>
      {/* <Text>Showing results for {searchvalue}</Text> */}
      <Navbar />
      <FlatList
        numColumns={2}
        data={imagecollection.results}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => ShowWallpaper(item)}>
            <View style={styles.imagecontainer}>
              {/* <Text>{item.title}</Text> */}
              <Image
                source={{ uri: item.cover_photo.urls.regular }}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    width: "100%",
    height: "100%",
    // backgroundColor: "#b8860b",
    alignItems: "center",
    //aspectRatio: 1,
    justifyContent: "center",
    // paddingTop: 10,
  },
  imagecontainer: {
    marginTop: 40,
    height: 200,
    width: 200,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default Screen1;
