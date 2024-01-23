import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string,
    flag: string,
}>

const CurrencyButton = (props: CurrencyButtonProps) => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center',
    },
    flag : {
        fontSize: 30,
        color: 'black',
    },
    country : {
        fontSize: 15,
        color: 'black',
    }
})

export default CurrencyButton
