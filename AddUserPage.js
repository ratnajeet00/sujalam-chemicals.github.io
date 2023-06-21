import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddUserPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddUser = () => {
    if (username.trim() === '' || password.trim() === '' || phoneNumber.trim() === '') {
      setMessage('Please enter username, password, and phone number.');
    } else {
      fetch('https://probable-jasper-minnow.glitch.me/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          phoneNumber: phoneNumber.trim(),
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'User created successfully') {
            setMessage('User created successfully.');
            setUsername('');
            setPassword('');
            setPhoneNumber('');
            fetchUserList();
          } else {
            setMessage('Failed to create user.');
          }
        })
        .catch(error => {
          setMessage('An error occurred while creating the user.');
        });
    }
  };

  const handleRemoveUser = (username) => {
    fetch('https://probable-jasper-minnow.glitch.me/removeUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'User removed successfully') {
          setMessage('User removed successfully.');
          fetchUserList();
        } else {
          setMessage('Failed to remove user.');
        }
      })
      .catch(error => {
        setMessage('An error occurred while removing the user.');
      });
  };

  const fetchUserList = () => {
    fetch('https://probable-jasper-minnow.glitch.me/userList')
      .then(response => response.json())
      .then(data => {
        setUserList(data);
      })
      .catch(error => {
        console.log('An error occurred while fetching the user list.');
      });
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <Button title="Add User" onPress={handleAddUser} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <View style={styles.userListContainer}>
        <Text style={styles.userListTitle}>User List:</Text>
        {userList.map((user, index) => (
          <View key={index} style={styles.userListItemContainer}>
            <Text style={styles.userListItem}>{user.username} - {user.phoneNumber}</Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveUser(user.username)}
              color="#ff0000"
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  message: {
    marginTop: 12,
    color: '#ff0000',
    fontSize: 16,
  },
  userListContainer: {
    marginTop: 24,
  },
  userListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userListItem: {
    flex: 1,
    fontSize: 16,
  },
});

export default AddUserPage;
