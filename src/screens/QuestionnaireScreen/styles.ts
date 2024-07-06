import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/style.utils";
import { ThemeColors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(16),
        justifyContent: 'center',
        backgroundColor: ThemeColors.White
    },
    question: {
        fontSize: wp(20),
        fontWeight: 'bold',
        marginBottom: hp(20),
    },
    radioButtonContainer: {
        marginBottom: hp(10),
    },
    errorText: {
        color: ThemeColors.Red,
        fontSize: wp(12),
        marginVertical: hp(10),
    },
    mb20: {
        marginBottom: hp(20)
    }
});

export default styles;