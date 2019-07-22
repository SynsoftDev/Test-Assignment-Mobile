/**
* Author: Synsoft Global
* date: 20-07-2019
* Video Detail is responsible to show videl detail and play pause video
* Retrieving data from apis
* importing top level dependencies
*/

import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, Alert, SafeAreaView, Platform } from 'react-native';
import { styles } from './styles'
import * as api from "../../api/api";
import { getYearFromDate } from '../../utils/dateFormator';
import Video from 'react-native-video';

interface IState {
  navigation?: any,
  videoUrl: string
  rate: any
  volume: any
  muted: any
  resizeMode: any,
  duration: any
  currentTime: any,
  paused: any,
}

interface IProps {
  navigation?: any
}

export default class VideoDetail extends Component<IProps, IState> {

  constructor(props: IState) {
    super(props);
    this.state = {
      videoUrl: "",
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: true,
    };
  }
  video: Video;

  static navigationOptions =
    {
      title: 'Video Detail',
    };

  componentDidMount() {
    const { navigation } = this.props;
    const videoObj = navigation.getParam('videoObj', {});

    const videoId = 'videoId=' + videoObj.id
    api.getApiCall('streams', videoId).then((response: any) => {
      if (response.count != 0) {
        this.setState({
          videoUrl: response[0].link,
        })
      }
    })
      .catch((error: any) => {
        Alert.alert('Error ' + JSON.stringify(error));
      });
  }



  onLoad = (data: any) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data: any) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    const { navigation } = this.props;
    const videoObj = navigation.getParam('videoObj', {});
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.mainContainer}>
            <Image
              style={styles.topImage}
              source={{ uri: videoObj.poster }}
            />

            <Text style={styles.videoTitle}>{videoObj.name} ({getYearFromDate(videoObj.releaseDate)})</Text>
            <Text style={styles.videoDescription}>{videoObj.description}</Text>

            {Platform.OS === 'ios' &&
              <View style={styles.videoContainer}>
                <Video source={{ uri: this.state.videoUrl }}
                  style={styles.backgroundVideo} controls={true} paused = {true} />
              </View>
            }

            {Platform.OS === 'android' && this.state.videoUrl != '' &&
              <View style={styles.videoContainer}>
                <Video
                  ref={(ref: Video) => { this.video = ref }}
                  source={{ uri: this.state.videoUrl }}
                  style={styles.fullScreen}
                  rate={this.state.rate}
                  paused={this.state.paused}
                  volume={this.state.volume}
                  muted={this.state.muted}
                  onLoad={this.onLoad}
                  onProgress={this.onProgress}
                  onEnd={this.onEnd}
                  onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                  repeat={false}
                />

                <View style={styles.controls}>
                  <TouchableOpacity
                    style={{ margin: 10 }}
                    onPress={() => this.setState({ paused: !this.state.paused })}
                  >

                    <Image
                      style={{ width: 30, height: 30, alignSelf: 'center', }}
                      source={this.state.paused ? require('../../assets/images/play.png') : require('../../assets/images/pause.png')}
                    />

                  </TouchableOpacity>
                  <View>
                    <View style={styles.progress}>
                      <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                      <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
                    </View>
                  </View>
                </View>
              </View>
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
