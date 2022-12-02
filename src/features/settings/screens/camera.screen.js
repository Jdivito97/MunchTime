import React, { useEffect, useRef, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Text } from "../../../components/typography/text.component";
import styledComponentsNative from "styled-components/native";
import styled from "styled-components";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermissions, setHasPermissions] = useState(null);

  const snap = async () => {
    if (CameraRef) {
      const photo = await CameraRef.current.takePictureasync();
    }
  };

  const CameraRef = useRef();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (CameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};
