import React, { Component } from "react";
import { Text, View, Animated, Modal, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./style";

class Confirm extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.springValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.springValue.setValue(0);
    this.setState({
      visible: false
    });
  }

  componentWillReceiveProps(nextProps) {
    this.springValue.setValue(0);
    this.setState(
      {
        visible: nextProps.visible
      },
      () => {
        this.animatedConfirm();
      }
    );
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

  render() {
    return (
      <Modal
        visible={this.state.visible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => console.log("onRequestClose")}
        supportedOrientations={[
          "portrait",
          "portrait-upside-down",
          "landscape",
          "landscape-left",
          "landscape-right"
        ]}
      >
        <View
          style={[
            styles.background,
            {
              backgroundColor:
                this.props.background === true
                  ? "rgba(0, 0, 0, 0.4)"
                  : "transparent"
            }
          ]}
        >
          <Animated.View
            style={[
              styles.container,
              {
                transform: [{ scale: this.springValue }]
              }
            ]}
          >
            <View style={styles.content}>
              <Text style={styles.text}>{this.props.message}</Text>
            </View>

            <View style={styles.buttonContainer}>
              {this.props.showSecondary ? (
                <TouchableOpacity
                  onPress={
                    this.props.onSecondary
                      ? this.props.onSecondary
                      : () => {
                          this.setState({ visible: false });
                        }
                  }
                  style={[
                    styles.button,
                    { backgroundColor: this.props.colorSecondary }
                  ]}
                >
                  <Text style={styles.textButton}>
                    {this.props.textSecondary}
                  </Text>
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity
                onPress={this.props.onPrimary}
                style={[
                  styles.button,
                  { backgroundColor: this.props.colorPrimary }
                ]}
              >
                <Text style={styles.textButton}>{this.props.textPrimary}</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  visible: PropTypes.bool.isRequired,
  background: PropTypes.bool,
  message: PropTypes.string,
  textPrimary: PropTypes.string,
  colorPrimary: PropTypes.string,
  onPrimary: PropTypes.func,
  showSecondary: PropTypes.bool,
  textSecondary: PropTypes.string,
  colorSecondary: PropTypes.string,
  onSecondary: PropTypes.func
};

Confirm.defaultProps = {
  visible: false,
  background: true,
  message: "Do you want to continue?",
  textPrimary: "Yes",
  colorPrimary: "#00ACEF",
  showSecondary: true,
  textSecondary: "No",
  colorSecondary: "#F53D3D"
};

export default Confirm;
