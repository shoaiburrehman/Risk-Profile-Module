import React, { FC } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { wp } from "../../utils/style.utils";
import { Icon } from "../Icon";
import Text from "../Text";
import { ThemeColors } from "../../utils/colors";

const RadioButton: FC<{
    title: string;
    selected: Boolean;
    onPress?: () => void;
    containerStyle?: object;
    radioStyle?: object;
}> = ({ title = "Radio Text", selected = true, onPress, containerStyle, radioStyle }) => {

    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <View style={styles.radioContainer}>
                {selected && (
                    <Icon
                        source={require("../../assets/icons/check.png")}
                        width={8}
                        height={8}
                        color={ThemeColors.primary}
                    />
                )}
            </View>
            <Text style={styles.radioStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default RadioButton;

const styles = StyleSheet.create<any>({
    container: {
        flexDirection: "row",
        alignItems: "center",

    },
    radioContainer: {
        width: wp(15),
        backgroundColor: "tansparent",
        height: wp(15),
        borderRadius: wp(8),
        padding: wp(5),
        borderWidth: wp(1),
        borderColor: ThemeColors.Black,
        justifyContent: "center",
        alignItems: "center"
    },
    radioStyle: {
        marginLeft: wp(8),
        width: '90%'
    }
});
