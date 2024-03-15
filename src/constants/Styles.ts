import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    inputField: {
        height: 44,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 8,
        padding: 10,
        backgroundColor: Colors.white,
    },
    btnSecondary: {
        backgroundColor: Colors.secondaryGreen,
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPrimary: {
        backgroundColor: Colors.primaryGreen,
        height: 54,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: 'Inter',
    },
    btnIcon: {
        position: 'absolute',
        left: 16,
    },
    footer: {
        position: 'absolute',
        height: 100,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopColor: Colors.lightGrey,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
})