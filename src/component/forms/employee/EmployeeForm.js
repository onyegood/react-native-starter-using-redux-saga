import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import CardSection from '../../../component/common/cards/CardSection';
import Input from '../../../component/forms/elements/Input';
import { processFormEntries, createNewEmployee } from '../../../redux/actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                        label="First Name"
                        placeholder="First Name"
                        prop="firstName"
                        onChangeText={value => this.props.processFormEntries({ name: 'firstName', value })}
                        value={this.props.firstName}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Middle Name"
                        name="middleName"
                        placeholder="Middle Name"
                        value={this.props.middleName}
                        onChangeText={value => this.props.processFormEntries({ name: 'middleName', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Last Name"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.props.lastName}
                        onChangeText={value => this.props.processFormEntries({ name: 'lastName', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone Number"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.props.phone}
                        onChangeText={value => this.props.processFormEntries({ name: 'phone', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={value => this.props.processFormEntries({ name: 'email', value })}
                    />
                </CardSection>
                <CardSection style={styles.pickerCardSection}>
                    <Text style={styles.pickerTextStyle}>Gender</Text>
                    <Picker
                        selectedValue={this.props.gender}
                        style={styles.pickerStyle}
                        onValueChange={value => this.props.processFormEntries({ name: 'gender', value })} 
                    >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        value={this.props.password}
                        onChangeText={value => this.props.processFormEntries({ name: 'password', value })}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 20
    },
    pickerCardSection: {
        flexDirection: 'column',
    },
    pickerStyle: {
        hight: 100
    }
};

const mapDispatchToProps = {
    processFormEntries, 
    createNewEmployee
};

const mapStateToProps = (state) => {
    const { firstName, middleName, lastName, gender, phone, email, password, role } = state.employees;

    return { firstName, middleName, lastName, gender, phone, email, password, role };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);

