import { View, Text, StyleSheet } from "react-native"

const MealDetails = ({duration,complexity,affordability,style,textStyle}) => {

    return (
        <View style={[styles.detalis,style]}>
            <Text style={[styles.detalilItem,textStyle]}>{duration}m</Text>
            <Text style={[styles.detalilItem,textStyle]}>{complexity}</Text>
            <Text style={[styles.detalilItem,textStyle]}>{affordability}</Text>

        </View>
    )

}

export default MealDetails

const styles = StyleSheet.create({

    detalis: {

        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'


    },

    detalilItem: {
        marginHorizontal: 4,
        fontSize: 16,
    },
})