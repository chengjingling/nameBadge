import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Video
          source={require("./assets/background.mp4")}
          style={styles.background}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
        <Text style={styles.welcomeText}>Hello</Text>
        <Text style={styles.subtitleText}>my name is</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.innerText}>Cheng Jingling{"\n"}✨ 张靖翎 💫</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    width: "100%",
    height: "120%",
    position: "absolute",
    zIndex: 0,
  },

  welcomeText: {
    fontSize: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleText: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  innerContainer: {
    width: "80%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
  },

  innerText: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
});
