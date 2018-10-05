# react-native-light-confirm
[![npm version](https://badge.fury.io/js/react-native-light-confirm.svg)](//npmjs.com/package/react-native-light-confirm) [![npm downloads](https://img.shields.io/npm/dm/react-native-light-confirm.svg)
](//npmjs.com/package/react-native-light-confirm)

- Super lightweight component
- Smooth animation
- Display one button or two buttons
- Custom title
- Custom button's text
- Custom button's color
- Event on button
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
import Confirm from "react-native-light-confirm";

class Example extends Component {
  constructor() {
    super();
    this.state = {
      showConfirm: true
    };
  }

  render() {
    return (
      <Confirm
        visible={this.state.showConfirm}
        message="Are you sure to leave this page?"
        textPrimary="Leave"
        colorPrimary="#FF9500"
        colorSecondary="#1395EC"
        onPrimary={() => console.log("onPrimary")}
        onSecondary={() => console.log("onSecondary")}
      />
    );
  }
}

export default Example;
```

## API Usage

| Props          | Type   | Required | Description                                   | Default                    |
| -------------- | ------ | -------- | --------------------------------------------- | -------------------------- |
| visible        | bool   | Yes      | Show Confirm or not                           | false                      |
| background     | bool   | No       | Display dark background when Confirm is shown | true                       |
| message        | string | No       | Confirm's title                               | "Do you want to continue?" |
| textPrimary    | string | No       | Text display on primary button                | "Yes"                      |
| colorPrimary   | string | No       | Color apply to primary button                 | "#00ACEF"                  |
| onPrimary      | func   | No       | Event on primary button                       | -                          |
| showSecondary  | bool   | No       | Display secondary button or not               | true                       |
| textSecondary  | string | No       | Text display on secondary button              | "No"                       |
| colorSecondary | String | No       | Color apply to primary button                 | "#F53D3D"                  |
| onSecondary    | func   | No       | Event on secondary button                     | -                          |

### Note

Set props `visible` to `false` after you finished your task to prevent Confirm dialog shows again and again when state changed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/NYSamnang/react-native-light-confirm/blob/master/LICENSE) file for details
