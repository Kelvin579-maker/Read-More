import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { ScrollView } from 'react-native-gesture-handler';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const Stack = createStackNavigator()

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (  


<ScrollView>
<Text style={styles.title}>Read More</Text>
<View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
            source ={require('../../../src/assets/book5.jpg')}
            style={styles.bookImg}  
            />
            <Text style={styles.livrosT}>
                    O Nome do Vento
            </Text>
      </View>
      
      <Button
        title="Clique aqui para receber seu cupom de desconto no livro acima"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
</ScrollView>

);
}

const styles = StyleSheet.create({
  bookImg:{
    width: 200,
    height: 300,
    paddingBottom: '2%',
    paddingTop: '2%'
  },
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#fadeb9',
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',  
},
livrosT:{
    fontSize: 18,
    fontFamily: "sans-serif-thin",
    fontWeight: "bold",
    paddingTop: '4%',
    alignItems: 'center',
},
title:{
    borderBottomWidth: 20,
    fontSize: 50,
    paddingTop: '5%',
    color: 'white',
    backgroundColor: '#f5af40',
    fontFamily: 'Times New Roman',
},
titulo: {
  fontWeight: 'bold',
  fontSize: 26,
},
});


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Você recebeu um cupom 50% off! 📬",
      body: 'Parabéns! O livro "O nome do Vento" será enviado ao seu email em formato PDF. Abra e aproveite a leitura',
      data: new Date(Date.now() + (5*100)),
    },
    trigger: { seconds: 1 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });

  }

  return token;
}