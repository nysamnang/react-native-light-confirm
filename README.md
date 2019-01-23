# react-native-light-confirm

[![npm version](https://badge.fury.io/js/react-native-light-confirm.svg)](//npmjs.com/package/react-native-light-confirm) [![npm downloads](https://img.shields.io/npm/dm/react-native-light-confirm.svg)
](//npmjs.com/package/react-native-light-confirm)

- Super lightweight component
- Smooth animation
- Display one button or two buttons
- Custom whatever you like
- Support all orientations
- Support both Android and iOS

|                                                      iOS                                                      |                                                    Android                                                    |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![](https://raw.githubusercontent.com/NYSamnang/stock-images/master/react-native-light-confirm/RNLCF-IOS.gif) | ![](https://raw.githubusercontent.com/NYSamnang/stock-images/master/react-native-light-confirm/RNLCF-AOS.gif) |

## Installation

```
npm i react-native-light-confirm --save
```

### or

```
yarn add react-native-light-confirm
```

## Example

```jsx
import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Confirm from "react-native-light-confirm";

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.Confirm.open()}
          style={styles.button}
        >
          <Text style={styles.text}>CUSTOM CONFIRM</Text>
        </TouchableOpacity>

        <Confirm
          ref={ref => {
            this.Confirm = ref;
          }}
          onRight={() => this.Confirm.close()}
          title="Are you sure to leave this page?"
          customStyles={{
            mask: {
              backgroundColor: "transparent"
            },
            container: {
              borderWidth: 1,
              borderColor: "#9900cc"
            },
            buttonLeft: {
              backgroundColor: "#4da6ff"
            },
            buttonRight: {
              backgroundColor: "#ffa31a"
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
    backgroundColor: "#F5FCFF"
  },
  button: {
    backgroundColor: "#4EB151",
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
});

export default Example;
```

## Props

| Prop         | Type     | Description                                                           | Default                    |
| ------------ | -------- | --------------------------------------------------------------------- | -------------------------- |
| title        | string   | Title of Confirm dialog                                               | "Do you want to continue?" |
| textLeft     | string   | Text display on Left button                                           | "No"                       |
| textRight    | string   | Text display on Right button                                          | "Yes"                      |
| oneButton    | boolean  | If `true`, Confirm dialog displays only one button (Hide Left button) | false                      |
| customStyles | object   | Custom style to Confirm dialog                                        | {}                         |
| onLeft       | function | Event on Left button                                                  |                            |
| onRight      | function | Event on Right button                                                 |                            |
| onMask       | function | Event on Mask (The area outside Confirm dialog)                       |                            |

### Available Custom Style

```jsx
customStyles: {
  title: {...}, // Confirm Dialog's Title
  mask: {...}, // The area outside Confirm dialog
  container: {...}, // Confirm dialog Container
  content: {...}, // Confirm dialog Content
  buttonLeft: {...}, // Left button
  buttonRight: {...}, // Right button
  textLeft: {...}, // Left button's Text
  textRight: {...} // Right button's Text

}
```

## Methods

| Method Name | Description          |
| ----------- | -------------------- |
| open        | Open Confirm dialog  |
| close       | Close Confirm dialog |

### Note

Always set `ref` to `Confirm` and call each method by using `this.Confirm.methodName()` like example above.

##### \*Release note: If you are using version 1.0, please update to version 1.1 for better experience.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/NYSamnang/react-native-light-confirm/blob/master/LICENSE) file for details

## Author

Made with ❤️ by [NY Samnang](https://github.com/NYSamnang).
