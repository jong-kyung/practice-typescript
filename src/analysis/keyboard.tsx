import React, { FC, ReactNode } from "react";
import { KEybaord, StyleProp, ViewStyle, StyleSheetProperties } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const DismissKeyboardView: FC<{ children: ReactNode; style: StyleSheetProperties }> = ({ children, ...props }) => {
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>;
};
