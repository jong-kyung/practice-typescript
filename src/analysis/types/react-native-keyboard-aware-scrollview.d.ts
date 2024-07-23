declare module "react-native-keyboard-aware-scrollview" {
  import * as React from "react";
  class TouchableWithoutFeedback extends React.Component<ViewProps> {}
  export class KeyboardAwareScrollView extends TouchableWithoutFeedbackComponent {}
  export { KeyboardAwareScrollView };
}
