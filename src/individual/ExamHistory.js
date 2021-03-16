import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Backbar from '../components/BackBar';
import ProgressCircle from 'react-native-progress-circle';
import {useNavigation, useRoute} from '@react-navigation/native';

const ExamHistory = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Backbar title={'Lịch sử thi'} />
      <View style={styles.avatarContainer}>
        <ProgressCircle
          percent={route.params.percentPoint}
          radius={70}
          borderWidth={8}
          color="#FCB71E"
          shadowColor="#f7ecdb"
          bgColor="#fff">
          <Text style={{fontSize: 18}}>{route.params.percentPoint} %</Text>
        </ProgressCircle>
        <Text style={styles.text}>
          Tỉ lệ điểm trung bình trên mỗi đề thi đã làm
        </Text>
        <ProgressCircle
          percent={route.params.percentTrue * 100}
          radius={70}
          borderWidth={8}
          color="#FCB71E"
          shadowColor="#f7ecdb"
          bgColor="#fff">
          <Text style={{fontSize: 18}}>{route.params.percentTrue * 100} %</Text>
        </ProgressCircle>
        <Text style={styles.text}>
          Trung bình số câu trả lời đúng trên mỗi đề thi đã làm
        </Text>
        <ProgressCircle
          percent={
            (route.params.testDone /
              (route.params.testWait + route.params.testDone)) *
            100
          }
          radius={70}
          borderWidth={70}
          color="#FCB71E"
          shadowColor="#f7ecdb"
          bgColor="#fff">
          <Text style={{fontSize: 18}}>
            {(
              route.params.testDone /
              (route.params.testWait + route.params.testDone)
            ).toFixed(3) * 100}{' '}
            %
          </Text>
        </ProgressCircle>
        <Text style={styles.text}>
          Đã làm {route.params.testDone} trên tổng số{' '}
          {route.params.testWait + route.params.testDone} bài
        </Text>
      </View>
    </View>
  );
};

export default ExamHistory;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', alignItems: 'center'},
  avatarContainer: {
    alignItems: 'center',
    marginTop: scale(10),
    height: scale(160),
    width: scale(250),
  },
  text: {
    fontSize: scale(18),
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'orange',
    width: scale(290),
    height: scale(50),
    alignSelf: 'center',
    borderRadius: scale(25),
    marginTop: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  textBut: {
    fontSize: scale(18),
    color: 'white',
  },
});