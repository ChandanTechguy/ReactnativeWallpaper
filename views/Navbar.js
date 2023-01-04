import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import logo from "../assets/searchicon-removebg-preview.png";
import {inputtextwallpaper} from '../atoms/wallpaperinputtext'
import {useRecoilState} from 'recoil'

const Navbar = () => {
 const [searchvalue,setSearchvalue] = useRecoilState(inputtextwallpaper)

  const onChangeTextinput = (text) => {
    setSearchvalue(text)
   // console.log(searchvalue);

  };

  return (
    <View style={styles.container}>
      <View style={styles.searchcont}>
        <Image source={logo} style={styles.icon} />

        <TextInput
          onChangeText={onChangeTextinput}
          style={styles.searchinput}
          placeholder=" Search Anything"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },

  searchcont: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 20,
    position:"relative"
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: "35%",
    
  },

  searchinput: {
   // alignItems: "center",
    aspectRatio:5,
   // marginBottom:2
  },
});

export default Navbar;
