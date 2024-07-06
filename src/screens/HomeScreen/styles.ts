import { StyleSheet } from "react-native";
import { ThemeColors } from "../../utils/colors";
import { hp, wp } from "../../utils/style.utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: wp(20),
        fontWeight: 'bold',
        color: ThemeColors.White,
        marginBottom: hp(20),
    },
    
});
  
export default styles;