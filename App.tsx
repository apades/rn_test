import React, { FC, useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

const styles = StyleSheet.create({
  sectioncontainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectiontitle: {
    fontWeight: '600',
    fontSize: 24,
  },
  sectiondescription: {
    marginTop: 8,
    fontWeight: '400',
    fontSize: 18,
  },
  highlight: {
    fontWeight: '700',
  },
})

const Section: FC<{ title: string }> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.sectioncontainer}>
      <Text
        style={[
          styles.sectiontitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectiondescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

const App: FC = () => {
  let [volume, setvolume] = useState(0)
  useEffect(() => {
    NativeModules.KeyEventLister.audioSwitch(true)
    console.log('init')
    DeviceEventEmitter.addListener('keyup', (e) => {
      if (e.keyCode === 24) {
        // 音量增加键
        console.log('up')
      }
      if (e.keyCode === 25) {
        console.log('down')
      }
      console.log('e.keycod', e.keyCode)
    })
  }, [])
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Text>this is new {volume}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
