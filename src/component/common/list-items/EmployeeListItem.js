import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import CardSection from '../cards/CardSection';


class EmployeeListItem extends Component {

    onPressed = () => {
        Actions.editEmployee({ employee: this.props.employee });
    };

  render() {
    const { company } = this.props.employee;
    return (
        <TouchableWithoutFeedback onPress={this.onPressed}>
            <View>
                <CardSection>
                    <Text style={style.titleStyle}>
                        {company}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}

const style = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;

