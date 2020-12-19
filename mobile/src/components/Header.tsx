import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header = ({ title, showCancel = true }: HeaderProps) => {
  const navigation = useNavigation();
  function handleGoHome() {
    navigation.navigate('OrphanegesMap');
  }

  function handleShowCancel() {
    return (
      <BorderlessButton onPress={handleGoHome}>
        <Feather name="x" size={24} color="#FF669d" />
      </BorderlessButton>
    );
  }
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      {showCancel ? handleShowCancel() : <View />}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
});
