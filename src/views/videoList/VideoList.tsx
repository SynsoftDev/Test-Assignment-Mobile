 /**
 * Author: Synsoft Global
 * date: 20-07-2019
 * Video List is responsible for list videos
 * Retrieving data from apis
 * importing top level dependencies
 */

import React, { Component } from 'react';
import * as api from "../../api/api";
import { Dropdown } from 'react-native-material-dropdown';
import { styles } from './styles';
import { getYearFromDate } from '../../utils/dateFormator';

import {
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Text,
  SafeAreaView
} from 'react-native';


/**
 * Movie interface
 */

interface IVideo{
  id:number;
  name:string;
  type:string;
  releaseDate:string;
  poster:string;
  description:string;
}

/**
 * Component state
 */
interface IState {
  videosList: IVideo[],
  filteredList: IVideo[],
  navigation?: any,
  filterLabel: string
}

/**
 * props 
 */
interface IProps {
  navigation?: any
}

export default class VideoList extends Component<IProps, IState> {

  constructor(props: IState) {
    super(props);
    this.state = { videosList: [], filteredList: [], filterLabel: "All" };
  }

  static navigationOptions =
    {
      title: 'Video List',
    };

  componentDidMount() {
    api.getApiCall('videos', '').then((response: []) => {
      let tempArray = response.filter(function (movie: IVideo) {
        return movie.name != null;
      });

      this.setState({
        videosList: tempArray,
        filteredList: tempArray,
      })
    })
      .catch(error => {
        Alert.alert('Error ' + JSON.stringify(error));
      });
  }

  openDetailScreen(movie: IVideo) {
    this.props.navigation.navigate("VideoDetail", {
      videoObj: movie,
    })
  }

  filterList(filterType: string) {
    var tempArray = []
    if (filterType === "Movies") {
      tempArray = this.state.videosList.filter(function (movie: IVideo) {
        return movie.type == "movie";
      });
    } else if (filterType === "Trailers") {
      tempArray = this.state.videosList.filter(function (movie: IVideo) {
        return movie.type == "trailer";
      });
    } else {
      tempArray = this.state.videosList
    }
    
    this.setState({ filteredList: tempArray, filterLabel: filterType })
  }

  render() {
    let filterListType = [{
      value: 'All',
    }, {
      value: 'Trailers',
    }, {
      value: 'Movies',
    }];

    return (
      <SafeAreaView style = {{flex:1}}>
        <View style={styles.mainContainer}>

          <View style={styles.dropDownContainer}>
            <Dropdown
              label={this.state.filterLabel}
              data={filterListType}
              onChangeText={this.filterList.bind(this)}
            />
          </View>

          <FlatList style={styles.flatList}
            data={this.state.filteredList}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => this.openDetailScreen(item)}>
                <View style={styles.cardView}>
                  <Image
                    style={styles.imageThumbnail}
                    source={{ uri: item.poster }}
                  />
                  <Text style={styles.videoTitle}>{item.name} ({getYearFromDate(item.releaseDate)})</Text>
                  <Text style={styles.videoDescription} numberOfLines={3}>{item.description}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            //Setting the number of column
            numColumns={2}
          />
        </View>
      </SafeAreaView>
    );
  }
}