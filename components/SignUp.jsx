import React, { useState } from 'react';
import axios from 'axios';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Button,
    ScrollView
} from 'react-native';

export default function SignUp(props) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRoleName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    

    

    const validateForm = () => {
        let errors = {};
        if (!name) errors.name = "This field is required";
        if (name.length < 2 && name.length >= 1) {
            errors.name = "First Name should be at least 2 characters";
        }

        if (!lastName) errors.lastName = "This field is required";
        if (lastName.length < 2 && lastName.length >= 1) {
            errors.name = "Last Name should be at least 2 characters";
        }


        if (!username) errors.username = "This field is required";
        if (username.length < 2 && username.length >= 1) {
            errors.name = "User Name should be at least 2 characters";
        }
        if (!role) errors.role = "This field is required";
        if (role.length < 2 && role.length >= 1) {
            errors.name = "Role should be at least 2 characters";
        }
        if (!mobile) errors.mobile = "This field is required";
        if (!/^\d{10}$/.test(mobile)) {
            errors.mobile = "Mobile number should be 10 digits and consist only of numerical characters";
        }

        if (!email) errors.email = "This field is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Invalid email format";
        }
        if (!password) errors.password = "This field is required";
        if (!/(?=.*\d)(?=.*[a-z]).{5,}/.test(password)) {
            errors.password = "Password must contain at least one digit, one lowercase letter, and be at least 5 characters long";
        }
        if (!confirmPassword) errors.confirmPassword = "This field is required";
        if (password !== confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const bodyFormData = new FormData();
                    bodyFormData.append('first_name', name);
                    bodyFormData.append('last_name', lastName);
                    bodyFormData.append('email', email);
                    bodyFormData.append('username', username);
                    bodyFormData.append('role', role);
                    bodyFormData.append('phone_number', mobile);
                    bodyFormData.append('password', password);
                    console.log(bodyFormData);
                const response = await axios.post(
                    'http://3.109.172.100/api/authentication/register',
                    bodyFormData,
                    {
                      headers: {'Content-Type': 'multipart/form-data'},
                    },
                  );
                  console.log(response.data);
                
                props.navigation.navigate("Login");
            } catch (error) {
                
                console.error('Registration failed:', error);
                
            }
        }
    };

    return (

        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                

                <Text style={styles.textSignup}>Sign Up!</Text>
                <Text style={styles.text}>Create account by filling the form below</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <TextInput style={[styles.input, styles.firstNameInput]}
                            placeholder="First Name"
                            value={name}
                            onChangeText={setName} />
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput style={[styles.input, styles.lastNameInput]}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name" />
                        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
                    </View>
                </View>
                <TextInput style={styles.input}
                    placeholder="User Name"
                    value={username}
                    onChangeText={setUserName} />
                {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                <TextInput style={styles.input}
                    placeholder="Role"
                    value={role}
                    onChangeText={setRoleName} />
                {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}
                <TextInput style={styles.input}
                    placeholder="Phone Number"
                    value={mobile}
                    onChangeText={setMobile} />
                {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}
                <TextInput style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail} />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                <TextInput style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                <TextInput style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                <Button title="Continue" onPress={handleSubmit} />
                <Text style={styles.textAccount}>Already have an account? <Text style={styles.textLink} onPress={() => props.navigation.navigate("Login")}>Login</Text></Text>

            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
    },
    textSignup: {
        color: "#000000",
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: "Poppins-Regular",
    },
    text: {
        fontSize: 15,
        // fontWeight: 'bold',
        marginBottom: 50,
        fontFamily: "Poppins-Regular",
    },
    input: {
        height: 40,
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#148fcc',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputWrapper: {
        flex: 1,
    },
    lastNameInput: {
        marginLeft: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    textAccount: {
        color: "#000000",
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 50,
        fontFamily: "Poppins-Regular",
    },
    textLink: {
        color: "#d47494",
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 50,
        textDecorationLine: 'underline',
    },
});