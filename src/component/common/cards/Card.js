import React from 'react';
import { View } from 'react-native';

const Card = (props) => {

    const { containerStyle } = style;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};


const style = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

    }
};

export default Card;
