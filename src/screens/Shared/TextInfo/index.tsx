import { StyleSheet, View } from "react-native";
import Text from "../../../components/Text";
import { hp, wp } from "../../../utils/style.utils";
import { ThemeColors } from "../../../utils/colors";

const TextInfo = ({ head, text }: { head: string, text: string }) => {
    return (
        <View>
            <Text numberOfLines={1} style={styles.ipTextHead}>{head}</Text>
            <Text numberOfLines={1} style={styles.ipText}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    ipTextHead: {
        fontSize: wp(12),
        fontWeight: 'bold',
        color: ThemeColors.White,
        textAlign: 'center',
        marginBottom: hp(8)
    },
    ipText: {
        fontSize: wp(10),
        color: ThemeColors.LightGray,
        width: wp(80),
        textAlign: 'center'
    }
});

export default TextInfo;