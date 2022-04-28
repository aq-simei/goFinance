import styled from "styled-components/native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%
  height: ${scale(278)}px

  `

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 ${moderateScale(24)}px;
  `;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${moderateScale(48)}px;
  height: ${verticalScale(48)}px;
  border-radius: ${moderateScale(10)}px;
`;
export const User = styled.View`
  margin-left: ${moderateScale(17)}px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${moderateScale(18)}px;
`;

export const UserName = styled.Text`
color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${moderateScale(18)}px;
`;

