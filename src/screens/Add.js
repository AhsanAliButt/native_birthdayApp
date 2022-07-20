import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Foundation from 'react-native-vector-icons/Foundation';
import moment from 'moment';

const Add = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const currentDate = moment(date).format('MMMM D, YYYY');
  console.log(name);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#AD40AF',
        }}>
        Name
      </Text>
      <TextInput
        style={{borderWidth: 1, width: '90%', borderRadius: 10, marginTop: 10}}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#AD40AF',
          marginTop: 20,
        }}>
        Select Date
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          padding: 10,
          marginTop: 10,
          borderRadius: 10,
        }}>
        <View>
          <Text
            style={{
              textAlign: 'left',
              width: 230,
              fontSize: 16,
              color: '#000',
            }}>
            {' '}
            {currentDate}{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Foundation name="calendar" size={20} color="#2196f3" />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        style={{width: 230}}
        mode="date"
        placeholder="Select date"
        format="DD/MM/YYYY"
        minDate="01-01-1900"
        maxDate="01-01-2020"
        open={open}
        date={date}
        androidVariant="iosClone"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: -5,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            borderColor: 'gray',
            alignItems: 'flex-start',
            borderWidth: 0,
            borderBottomWidth: 1,
          },
          placeholderText: {
            fontSize: 17,
            color: 'gray',
          },
          dateText: {
            fontSize: 17,
          },
        }}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        onDateChange={date => {
          setDate(date);
        }}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#AD40AF',
            marginTop: 20,
            backgroundColor: '#fff',
            opacity: 1,
            padding: 10,
          }}>
          Save Reminder
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
