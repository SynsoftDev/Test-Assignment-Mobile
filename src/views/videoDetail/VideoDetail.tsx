 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * Video Detail is responsible to show video details and play pause video
 * Retrieving data from apis
 * importing top level dependencies
 */


import React, { Component } from 'react';
import { View, Image, ScrollView, Text, Alert, SafeAreaView } from 'react-native';
import { styles } from './styles'
import VideoPlayer from 'react-native-video-controls';
import * as api from "../../api/api";
import { getYearFromDate } from '../../utils/dateFormator';

interface IState {
  navigation?: any,
  videoUrl: string
}

interface IProps {
  navigation?: any
}

export default class VideoDetail extends Component<IProps, IState> {

  constructor(props: IState) {
    super(props);
    this.state = {
      videoUrl: "",
    };
  }

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

  render() {

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

            <View style={styles.videoContainer}>
              <VideoPlayer source={{ uri: this.state.videoUrl }} disableBack = {true}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
