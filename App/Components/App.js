import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import {images} from '../Themes'


export default class Swiper extends Component {
  constructor (props){
    super(props)
    this.state = {
      centerText: 'swipe and click to change this text'
    }

    this.swipeoutBtns = [
      {
        component: this.renderBtn(images.btn1, 'love story'),
        onPress: () => {this.setState({centerText: 'Click "love story"'})}
      },
      {
        component: this.renderBtn(images.btn2, 'share'),
        onPress: () => {this.setState({centerText: 'Click "share"'})}
      },
      {
        component: this.renderBtn(images.btn3, 'save'),
        onPress: () => {this.setState({centerText: 'Click "save"'})}
      }
    ]
  }

  renderBtn (btnPath, text) {
    return <View style={styles.container}>
              <Image style={styles.img} source={btnPath} />
              <Text style={styles.btnText}>{text}</Text>
          </View>
  }

  render() {
    return (
      <View style={styles.container}>
        <Swipeout
          backgroundColor='transparent'
          autoClose right={this.swipeoutBtns}
          style={styles.containerSwiper}
          buttonWidth={60}
        >
          <View style={styles.content}>
            <Text>Swipe me left... and other text</Text>
            <Image style={styles.img} source={images.listIcon} />
          </View>
        </Swipeout>
        <View style={styles.textContainer}>
          <Text style={styles.centerText}>{this.state.centerText}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerSwiper: {
    height:95,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  content: {
    height:95,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center'
  },
  img: {
    height: 60,
    width: 60
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  centerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  btnText: {
    textAlign: 'center'
  }
});
