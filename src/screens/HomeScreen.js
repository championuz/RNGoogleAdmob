import React, {useEffect, useState} from 'react'
import { Text, Button, View } from 'react-native'
import { RewardedAd, GAMBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'; 

const HomeScreen = ({navigation}) => {

const rewarded = RewardedAd.createForAdRequest(TestIds.GAM_REWARDED, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


useEffect(() => {
  rewarded.load()
}, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>
    <Text style={{textAlign: 'center'}}>HomeScreen</Text>
    <Button
    style={{marginBottom: 10}}
      onPress={()=>navigation.navigate("Details")}
      title="Go to Details Screen"
    />

<Button
      onPress={()=> rewarded.show()}
      title="Display Rewarded Ads"
    />
    </View>
    <View style={{flex: 0.1}}>
     <GAMBannerAd
      unitId={TestIds.BANNER}
      sizes={[BannerAdSize.FULL_BANNER]}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
    </View>
    </View>
  )
}

export default HomeScreen;
