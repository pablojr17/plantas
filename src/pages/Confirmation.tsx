import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

interface Params {
  nome: string;
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤙🏼',
  smile: '👩🏽‍🌾'
}

export function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    nome,
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = route.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>
        <Text style={styles.title}>
          {title} {nome}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  },
});