import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  requireNativeComponent,
} from 'react-native';

const Counter = requireNativeComponent('Counter');

class App extends React.Component {
  state = {
    count: 1,
  };

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={[styles.wrapper, styles.border]}
            onPress={this.increment}>
            <Text
              style={styles.button}>{`React Native ${this.state.count}`}</Text>
          </TouchableOpacity>
          <Counter style={styles.wrapper} />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  button: {
    fontSize: 50,
    color: '#595',
  },
});

export default App;
