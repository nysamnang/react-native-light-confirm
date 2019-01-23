import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Animated, Modal, TouchableOpacity } from "react-native";
import styles from "./style";

const SUPPORTED_ORIENTATIONS = [
  "portrait",
  "portrait-upside-down",
  "landscape",
  "landscape-left",
  "landscape-right"
];

class Confirm extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };

    this.springValue = new Animated.Value(0);

    this.onMask = this.onMask.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
  }

  componentWillUnmount() {
    this.springValue.setValue(0);
  }

  animatedConfirm() {
    Animated.spring(this.springValue, {
      toValue: 1,
      speed: 15,
      useNativeDriver: true
    }).start();
  }

  onMask() {
    if (typeof this.props.onMask === "function") {
      this.props.onMask();
    }
  }

  onLeft() {
    this.close();
    if (typeof this.props.onLeft === "function") {
      this.props.onLeft();
    }
  }

  onRight() {
    if (typeof this.props.onRight === "function") {
      this.props.onRight();
    }
  }

  open() {
    this.setState({ visible: true }, () => this.animatedConfirm());
  }

  close() {
    this.setState({ visible: false }, () => this.springValue.setValue(0));
  }

  render() {
    const { title, oneButton, textLeft, textRight, customStyles } = this.props;
    return (
      <Modal
        visible={this.state.visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => console.log("onRequestClose")}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onMask}
          style={[styles.background, customStyles.mask]}
        >
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ scale: this.springValue }]
              },
              customStyles.container
            ]}
          >
            <TouchableOpacity activeOpacity={1} style={customStyles.content}>
              <View style={styles.content}>
                <Text style={[styles.title, customStyles.title]}>{title}</Text>
              </View>

              <View style={styles.buttonContainer}>
                {oneButton ? null : (
                  <TouchableOpacity
                    onPress={this.onLeft}
                    style={[
                      styles.button,
                      styles.buttonLeft,
                      customStyles.buttonLeft
                    ]}
                  >
                    <Text style={[styles.textButton, customStyles.textLeft]}>
                      {textLeft}
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={this.onRight}
                  style={[styles.button, customStyles.buttonRight]}
                >
                  <Text style={[styles.textButton, customStyles.textRight]}>
                    {textRight}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  customStyles: PropTypes.object,
  title: PropTypes.string,
  textLeft: PropTypes.string,
  textRight: PropTypes.string,
  onMask: PropTypes.func,
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  oneButton: PropTypes.bool
};

Confirm.defaultProps = {
  customStyles: {},
  title: "Do you want to continue?",
  textLeft: "No",
  textRight: "Yes",
  oneButton: false
};

export default Confirm;
