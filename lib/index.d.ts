/// <reference types="react" />
import { ViewStyle } from "react-native";
interface DotTypingAnimationProps {
    style?: ViewStyle;
    dotStyles?: ViewStyle;
    dotColor?: string;
    dotMargin?: number;
    dotAmplitude?: number;
    dotSpeed?: number;
    show?: boolean;
    dotRadius?: number;
    dotY?: number;
    dotX?: number;
}
export declare function DotTypingAnimation(props: DotTypingAnimationProps): JSX.Element | null;
export {};
