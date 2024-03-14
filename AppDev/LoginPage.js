import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icon

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = () => {
    // Perform login authentication with username/email and password
    // Replace the console log with your actual authentication logic
    console.log('Logging in with username/email:', username, 'and password:', password);

    // For example, you can navigate to the Home page after successful login
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        onChangeText={text => setUsername(text)}
        value={username}
        autoCompleteType="username"
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
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.recoveryButton} onPress={() => navigation.navigate('AccountRecovery')}>
        <Text style={styles.buttonText}>Account Recovery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfaf5', // Change background color as needed
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
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  recoveryButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginPage;
