import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.background}>
      <View style={styles.container}>
      <Image source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/430330029_391546760177517_5528131418682375329_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGipsuYzzUVPX5L-3vy551T3nZ1JzEit6DednUnMSK3oAdLrYzugLFhnSw4uipaErT8H7FCfhz8pMH1FRV3nOkR&_nc_ohc=eHEqDa_WyOQAX_Q_j9Y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdShBr_aSguLIWPtwHwyFk75o-_y-VWDbpuW08VjRHHrRQ&oe=6617BC75'}} style={styles.logo} />
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.subheading}>BeCute</Text>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
          <Button title="Register" onPress={() => navigation.navigate('Registration')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Add background color or use transparent color
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Change text color as needed
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold', // Corrected syntax
    color: '#fff', // Change text color as needed
    textAlign: 'center', // Center-align the text
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%', // Adjusted width
    paddingHorizontal: 20,
    marginTop: 50,
  },
});

export default LandingPage;
