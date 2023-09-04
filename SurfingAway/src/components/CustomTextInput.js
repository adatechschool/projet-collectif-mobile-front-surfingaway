import React from "react";
import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";

const CustomTextInput = ({ control, name, placeholder, label }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur } }) => (
                <View>
                    <Text>{label}</Text>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder} />
                </View>
            )} />
    )
}

export default CustomTextInput;