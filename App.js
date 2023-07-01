import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { store } from './src/store/store'
import { useDispatch } from 'react-redux'
import { loginUser } from './src/store/action/login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const UIRender = ({ navigation }) => {
  // const {loginStore} = useStore();
  // const {loginUser} = loginStore();
  const dispatch = useDispatch()

  const loginReducer = useSelector(state => state.login)

  const [isaMobileDevice, setisaMobileDevice] = useState('')
  function getPlatform () {
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent
    let regexp = /android|iphone|kindle|ipad/i

    /* Using test() method to search regexp in details
it returns boolean value*/
    let isMobileDevice = regexp.test(details)

    if (isMobileDevice) {
      console.log('You are using a Mobile Device')
      setisaMobileDevice('Mobile')
    } else {
      console.log('You are using Desktop')
      setisaMobileDevice('Desktop')
    }
  }

  useEffect(() => {
     getPlatform()

    //  console.log ('loginReducer', loginReducer);

    // setInterval(() => {
    //   dispatch(loginUser('VISHESH'))
    // }, 2000)

    //  navigation.navigate('DetailsScreen')
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hello this {isaMobileDevice}</Text>
      <Text>{loginReducer?.token}</Text>

      <StatusBar style='auto' />
      <Button
        onPress={() => {
          dispatch(loginUser('VISHESH'))
          navigation.navigate('Details')
        }}
        style={{
          marginTop: 30
        }}
        title='NAVIGATE'
      />
    </View>
  )
}

function HomeScreen () {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}
function DetailsScreen () {
  const dispatch = useDispatch()

  const loginReducer = useSelector(state => state.login)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{loginReducer?.token}</Text>
    </View>
  )
}
const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={UIRender} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
