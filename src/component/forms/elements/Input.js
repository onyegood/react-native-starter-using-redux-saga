import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ 
    value, 
    label, 
    onChangeText, 
    placeholder, 
    autoCapitalize = 'none', 
    secureTextEntry, 
    autoCorrect = false 
}) => {
    const { inputStyle, labelStyle, inputContainer } = styles;
    return (
        <View style={inputContainer}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        flex: 1
    },
    labelStyle: {
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    inputContainer: {
        heigth: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;
