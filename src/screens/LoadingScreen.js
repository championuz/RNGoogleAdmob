import React, {useEffect, useState} from 'react'
import { Text, AppState, ActivityIndicator, Button, View } from 'react-native'
import { AppOpenAd, TestIds } from 'react-native-google-mobile-ads'; 

const LoadingScreen = ({navigation}) => {

  const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });

  useEffect(() => {
    appOpenAd.load();
    setTimeout(() => {
    navigation.replace("Home");
    appOpenAd.show();
    }, 10000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
          <ActivityIndicator size="large" color="#ff0000" />
          <View style={{ marginTop: 10 }}>
            <Text style={{textAlign: 'center'}}>Loading Please wait...</Text>
          </View>
    </View>
  )
}

export default LoadingScreen;
