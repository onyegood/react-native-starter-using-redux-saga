import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from '../cards/CardSection';
import Button from '../../forms/elements/Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={() => {}}
        >
        <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
                <Text style={textStyle}>{children}</Text>
            </CardSection>

            <CardSection>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
        </View>
    </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        flex: 1,
        position: 'relative'
    }
};

export default Confirm;
