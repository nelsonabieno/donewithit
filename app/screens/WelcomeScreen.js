import React from "react";
import { View,ImageBackground,StyleSheet,Image, Text, ViewComponent } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props){
    return(
     <ImageBackground 
        blurRadius={10}
        source={require("../assets/background.jpg")} 
        resizeMode="cover" 
        style={styles.background}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title="LOGIN"></AppButton>
            <AppButton title="REGISTER" color="secondary"></AppButton>
        </View>
     </ImageBackground>
    );
};

const styles =StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logo:{
        width: 100,
        height: 100
    },
    logoContainer:{
        position: "absolute",
        top: 70,
    },
    logoText: {
        position: "absolute",
        top: 90,
        fontSize: 14,
        fontWeight: "600",
        paddingVertical: 20,
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    }
})

export default WelcomeScreen;

