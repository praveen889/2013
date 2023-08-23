import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TrainSchedulePage = () => {
  const [trainSchedule, setTrainSchedule] = useState([
    { id: '1', trainNumber: '123', departure: '08:00 AM', destination: 'DELHI' },
    { id: '2', trainNumber: '456', departure: '08:30 AM', destination: 'KOLKATA' },
    { id: '3', trainNumber: '1658', departure: '09:00 AM', destination: 'HYDERABAD' },
    { id: '4', trainNumber: '4895', departure: '10:00 AM', destination: 'NOIDA' },
    { id: '5', trainNumber: '1284', departure: '10:30 AM', destination: 'GURUGRAM' },
    { id: '6', trainNumber: '4567', departure: '10:30 AM', destination: 'SAMASTIPUR' },
    { id: '7', trainNumber: '2364', departure: '11:00 AM', destination: 'PATNA' },
    { id: '8', trainNumber: '4856', departure: '11:30 AM', destination: 'LAKHNOW' },
    { id: '9', trainNumber: '1253', departure: '12:00 PM', destination: 'SURAT' },
    { id: '10', trainNumber: '4506', departure: '12:30 PM', destination: 'MUMBAI' },
    { id: '11', trainNumber: '1253', departure: '01:00 PM', destination: 'PUNE' },
    { id: '12', trainNumber: '4506', departure: '01:30 PM', destination: 'BHOPAL' },
    { id: '13', trainNumber: '4623', departure: '02:00 PM', destination: 'CHANDIGHAR' },
    { id: '14', trainNumber: '4756', departure: '02:30 PM', destination: 'ROSERA' },
    
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.scheduleItem}
      onPress={() => navigation.navigate('TrainDetail', { train: item })}
    >
      <Text style={styles.trainNumber}>{item.trainNumber}</Text>
      <Text>{item.departure} - {item.destination}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Train Schedule</Text>
      <FlatList
        data={trainSchedule}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scheduleItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  trainNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TrainSchedulePage;
