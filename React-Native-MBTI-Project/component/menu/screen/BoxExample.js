// BoxExample.js
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

const BoxExample = () => {
  // 각 색의 의미를 나타내는 컴포넌트
  const exampleBox = ["#95E1D3", "#EAFFD0", "#CCCCCC", "#FCE38A", "#F38181"]; // 좋은것 부터 내림차순
  const comment = [
    "우리 궁합 다시 생각해봐요 ",
    "최악은 아니지만 좋지도 않음 ",
    "안맞는 것 맞는 것 , 반반! ",
    "좋은 관계로 발전 가능 ",
    "우리 궁합은 천생연분 ",
  ];
  const boxComponent = (index) => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // flex: 1,
              height: 30,
              width: 30,
              backgroundColor: exampleBox[index],
            }}
          ></View>
          <Text
            style={{
              flex: 1,
              alignSelf: "center",
              marginLeft: 6,
            }}
          >
            {comment[4 - index]}
          </Text>
        </View>
      </>
    );
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          width: "100%",
          marginLeft: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Text>의미</Text> */}
        {boxComponent(0)}
        {boxComponent(1)}
        {boxComponent(2)}
        {boxComponent(3)}
        {boxComponent(4)}
      </View>
    </>
  );
};
export default BoxExample;
