import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/style.utils";
import { ThemeColors } from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ThemeColors.White
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    score: {
        fontSize: 20,
        marginVertical: 8
    },
    profile: {
        fontSize: 18,
        color: 'gray'
    },      
});

export default styles;