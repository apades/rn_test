import { RootPageProps, useNav } from '@r/hook'
import CookieManager from '@react-native-cookies/cookies'
import React, { FC, useRef } from 'react'
import { View } from 'react-native'
import WebView, { WebViewNavigation } from 'react-native-webview'

type Props = RootPageProps<'viewer'>
let Page_Viewer: FC<Props> = (props) => {
  let { url: uri } = props.route.params
  let nav = useNav<'viewer'>()
  let webRef = useRef<WebView>()

  let handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
    // 这里可以拿到httpOnly的cookie了
    CookieManager.get(uri).then((res) => console.log('res', res))
  }
  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <WebView
        ref={webRef}
        source={{
          uri,
        }}
        onMessage={(e) => {
          console.log('cookie', e.nativeEvent.data)
        }}
        sharedCookiesEnabled={true}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        // injectedJavaScript={`
        // window.ReactNativeWebView.postMessage(document.cookie)`}
      ></WebView>
    </View>
  )
}
export default Page_Viewer
