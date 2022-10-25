import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from '../theme/colors'

export default function Details({navigation, route}) {
    const planet=route.params.planet;
    console.log("Planet", planet);
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <Text>Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
    },
  });
  