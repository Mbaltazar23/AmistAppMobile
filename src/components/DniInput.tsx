import React, { useState } from "react";
import { TextInput } from "react-native";

const DNIInput = (props: any) => {
  const [value, setValue] = useState("");

  const handleInputChange = (text: string) => {
    let formattedText = text.replace(/\./g, "").replace("-", "");
    if (formattedText.match(/^(\d{2})(\d{3}){2}(\w{1})$/)) {
      formattedText = formattedText.replace(
        /^(\d{2})(\d{3})(\d{3})(\w{1})$/,
        "$1.$2.$3-$4"
      );
    } else if (formattedText.match(/^(\d)(\d{3}){2}(\w{0,1})$/)) {
      formattedText = formattedText.replace(
        /^(\d)(\d{3})(\d{3})(\w{0,1})$/,
        "$1.$2.$3-$4"
      );
    } else if (formattedText.match(/^(\d)(\d{3})(\d{0,2})$/)) {
      formattedText = formattedText.replace(/^(\d)(\d{3})(\d{0,2})$/, "$1.$2.$3");
    } else if (formattedText.match(/^(\d)(\d{0,2})$/)) {
      formattedText = formattedText.replace(/^(\d)(\d{0,2})$/, "$1.$2");
    }

    setValue(formattedText);
    props.onChangeText(formattedText);
  };

  return (
    <TextInput
      style={props.style}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      value={value}
      onChangeText={handleInputChange}
    />
  );
};

export default DNIInput;