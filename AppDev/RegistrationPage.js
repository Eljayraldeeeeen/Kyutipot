import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon

const RegistrationPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleRegistration = () => {
    // Perform user registration with username, email, and password
    // Replace the console log with your actual registration logic
    console.log('Registering with username:', username, 'email:', email, 'and password:', password);
    
    // For example, you can navigate to the Home page after successful registration
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCompleteType="username"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.passwordVisibilityButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          {/* Use FontAwesome eye icons for show/hide functionality */}
          <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change background color as needed
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  passwordVisibilityButton: {
    padding: 10,
  },
});

export default RegistrationPage;
