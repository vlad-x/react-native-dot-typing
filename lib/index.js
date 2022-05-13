"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotTypingAnimation = void 0;
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
function DotTypingAnimation(props) {
    const { style = {}, dotStyles = {}, dotColor = "black", dotMargin = 3, dotAmplitude = 2, dotSpeed = 0.15, show = true, dotRadius = 2.5, dotY = 6, dotX = 12, } = props;
    const [animationParams, setAnimationParams] = React.useState({
        time: dotSpeed,
        radius1: dotRadius + dotAmplitude * Math.sin(0),
        radius2: dotRadius + dotAmplitude * Math.sin(-1),
        radius3: dotRadius + dotAmplitude * Math.sin(-2),
    });
    const frameAnimationRequest = React.useRef();
    const getStyles = ({ x, y, radius }) => ({
        left: x,
        top: y,
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        backgroundColor: dotColor,
    });
    const renderDot = (dotProps) => <react_native_1.View style={[styles.dot, dotStyles, getStyles(dotProps)]}/>;
    const animation = () => {
        setAnimationParams((prevAnimationParams) => ({
            radius1: dotRadius + dotAmplitude * Math.sin(prevAnimationParams.time),
            radius2: dotRadius + dotAmplitude * Math.sin(prevAnimationParams.time - 1),
            radius3: dotRadius + dotAmplitude * Math.sin(prevAnimationParams.time - 2),
            time: prevAnimationParams.time + dotSpeed,
        }));
        frameAnimationRequest.current = requestAnimationFrame(animation);
    };
    React.useEffect(() => {
        frameAnimationRequest.current = requestAnimationFrame(animation);
        return () => cancelAnimationFrame(frameAnimationRequest.current);
    }, []);
    if (!show) {
        return null;
    }
    return (<react_native_1.View style={style}>
      {renderDot({
        x: dotX - dotRadius - dotMargin - animationParams.radius1,
        y: dotY - animationParams.radius1,
        radius: animationParams.radius1,
    })}
      {renderDot({
        x: dotX - animationParams.radius2,
        y: dotY - animationParams.radius2,
        radius: animationParams.radius2,
    })}
      {renderDot({
        x: dotX + dotRadius + dotMargin - animationParams.radius3,
        y: dotY - animationParams.radius3,
        radius: animationParams.radius3,
    })}
    </react_native_1.View>);
}
exports.DotTypingAnimation = DotTypingAnimation;
const styles = react_native_1.StyleSheet.create({
    dot: {
        position: "absolute",
    },
});
