import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView  style={styles.safe}>
      <View style={styles.inputs}>
        <Image source={require('./src/assests/images/spiral.png')} />
        <View>
          <Text style={styles.inputs}>Hello I'm Danish</Text>
          <Text style={styles.inputs}>UX & UI </Text>
          <Text style={styles.inputs}>Designer</Text>
        </View>
      </View>
      <Text style={styles.input}>About Me</Text>
      <Text style={styles.input}>Story of Hardwork </Text>
      <Text style={styles.text}>
        Hi My Name is Danish , As a UX/UI designer, I am passionate about
        crafting intuitive and delightful user experiences that seamlessly blend
        functionality with aesthetics. specialize in translating complex ideas
        into user-friendly interfaces. I specialize in translating complex ideas
        into user-friendly interfaces. 
      </Text>
      <Text style={styles.input}>Skills</Text>
      <Text style={styles.end}>1.UX & UI</Text>
      <Text style={styles.end}>2.Prototyping</Text>
      <Text style={styles.input}>Experience</Text>
      <Text style={styles.text}>
        Iam working as Designer in Xyz Company, I have completed quite a few
        projects and have an experience of almost 2 years.
      </Text>
      <Text style={styles.projects}>Projects</Text>
      <Text style={styles.text}>
        As a designer iam currently involved in ongoing UI/UX projects, my focus
        is on creating intuitive and visually appealing user interfaces that
        enhance the overall user experience. Each project involves meticulous
        research into user needs and behaviors, which informs the design process
        from wireframing to prototyping.
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 17,
    color: 'black',
    marginBottom: 25,
  },
  text: {
    alignSelf: 'center',
    marginHorizontal: 7,
    color: 'black',
    marginTop: 10,
  },
  end: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  projects: {
    marginTop: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  inputs: {
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginVertical: 15,
    marginBottom: 0,
  },
  safe:
  {
    flex:1,
    backgroundColor:'lightblue'
  }
  },
);
export default App;
