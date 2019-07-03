import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { textStyle, veiwStyle } = styles;

    return (
        <View style={veiwStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    )
}


const styles = {
    veiwStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevetion: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
}

export default Header;