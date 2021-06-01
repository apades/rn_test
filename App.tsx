import React, { FC, useEffect } from 'react'
import {
  Button,
  DeviceEventEmitter,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'
import fs from 'react-native-fs'
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'

const App: FC = () => {
  useEffect(() => {
    NativeModules.KeyEventLister.audioSwitch(true)
    console.log('init')
    DeviceEventEmitter.addListener('keyup', (e) => {
      if (e.keyCode === 24) {
        // 音量增加键123
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
          <Text>this is new 123</Text>
          <Button
            onPress={() => {
              console.log(fs.ExternalDirectoryPath)
              // let fsBase = `/storage/1401-3318`
              // fs.appendFile(
              //   `${fs.ExternalStorageDirectoryPath}/test.txt`,
              //   'bbbbbbb',
              // )
              //   .then((res) => console.log('ok', res))
              //   .catch((err) => console.error('err', err))
            }}
            title="press me"
          ></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
