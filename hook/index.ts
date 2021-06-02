import { RootStackParamList } from '@r/App'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootPageProps<K extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, K>
  navigation: StackNavigationProp<RootStackParamList, K>
}

export function useNav<
  K extends keyof RootStackParamList,
>(): StackNavigationProp<RootStackParamList, K> {
  return useNavigation<RootPageProps<K>['navigation']>()
}
