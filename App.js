import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from './components/Appheader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      word: 'Loading...',
      lexicalCategory: '',
      examples: [],
      defination: '',
    };
  }
  then = (response) => {
    var responseObject = JSON.parse(response);
    var word = responseObject.word;
    var lexicalCategory =
      responseObject.results[0].lexicalEntries[0].lexicalCategory.text;
    var definition =
      responseObject.results[0].lexicalEntries[0].entries[0].senses[0]
        .definitions[0];
    this.setState({
      word: word.trim(),
      lexicalCategory:
        lexicalCategory === undefined ? '' : lexicalCategory.trim(),
      definition: definition === undefined ? '' : definition.trim(),
    });
  };

  getWord = (word) => {
    var url = 'https://whitehat-dictionary.glitch.me/?word=' + word;
    return fetch(url).then((data) => {
      return data.json();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <TextInput
          style={{
            height: 40,
            borderColor: 'red',
            borderWidth: 7,
            marginTop: 100,
            width: '90%',
            alignSelf: 'centre',
            marginLeft: 20,
            textAlign: 'center',
          }}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSerchPressed: false,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              defination: '',
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ isSerchPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.wbuttonText}> Word: </Text>
          <Text style={styles.buttonText}> {this.state.text}</Text>
        </View>

        <View>
          <Text style={styles.wbuttonText}> Type: </Text>
          <Text style={styles.buttonText}> {this.state.lexicalCategory}</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Text style={styles.wbuttonText}> Definition: </Text>
          <Text style={styles.buttonText}> {this.state.defination}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: 'red',
    marginTop: -5,
    width: 110,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  wbuttonText: {
    textAlign: 'left',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
