import React, { useState, useEffect } from "react";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
import { useRecoilState } from "recoil";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Screen2 = ({ route }) => {
  const { clickedimage } = route.params;
  const [searchvalue, setSearchvalue] = useRecoilState(inputtextwallpaper);
  const [imagedata, setImagedata] = useState();

  useEffect(() => {
    setImagedata(JSON.parse(clickedimage) ?.cover_photo.urls.regular );
  }, []);

  //console.log(typeof (imagedata))

  const getPermission = async () => {};
  const shownextitem = async() => {
   // console.log(searchvalue)
   const data = await fetch (`https://source.unsplash.com/900x1600/?${searchvalue}`)
   setImagedata(data.url)
  };

  return (
    <View style={StyleSheet.imagecontainer}>
     
        <Image
          source={{ uri: imagedata}}
          style={styles.image}
        />
      {/* <Text>My btn</Text> */}
      <TouchableOpacity style={styles.downloadbtn} onPress={getPermission}>
        <Text style={styles.downloadbtntxt}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextbtn} onPress={shownextitem}>
        <Text style={styles.nextbtntxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagecontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 1000,
  },
  downloadbtn: {
    position: "absolute",
    bottom: 18,
    backgroundColor: "black",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    left: 80,
    borderRadius: 10,
    elevation: 10,
  },
  downloadbtntxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  nextbtn: {
    position: "absolute",
    bottom: 18,
    backgroundColor: "black",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    right: 80,
    borderRadius: 10,
    elevation: 10,
  },
  nextbtntxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Screen2;
