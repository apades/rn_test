import { writeFile } from '../utils/fs'
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
import { Colors, Header } from 'react-native/Libraries/NewAppScreen'
import { useNav } from '@r/hook'

let Page_Home: FC = (props) => {
  let nav = useNav<'home'>()

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
    console.log(process.env.LOCALIP)
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
          <Text>this is new hha {process.env.LOCALIP}</Text>
          <Button
            onPress={() => {
              // console.log(fs.ExternalDirectoryPath)
              // let fsBase = `/storage/1401-3318`
              writeFile('/test.txt', '123123')
                .then((res) => console.log('ok', res))
                .catch((err) => console.error('err', err))
            }}
            title="press me"
          ></Button>
          <View style={{ marginTop: 20 }}>
            <Button
              title="to webview"
              onPress={() =>
                nav.push('viewer', {
                  url: 'https://www.pixiv.net/',
                })
              }
            ></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page_Home
