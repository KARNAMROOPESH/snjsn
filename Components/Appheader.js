
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> EASY DICTIONARY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'rgb(254, 110, 20)',
    borderWidth:15,
    borderColor:'rgb(251, 228, 133)'
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});

export default AppHeader;