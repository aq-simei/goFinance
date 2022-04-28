import React from "react"
import { Header, Container, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper } from './style'
export const Dashboard = () => {
  return (
  <Container>
    <Header>
      <UserWrapper>
        <UserInfo>
          <Photo source={{uri: 'https://github.com/aq-simei.png'}} />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Antônio</UserName>
          </User>
        </UserInfo>
      </UserWrapper>
    </Header>  
  </Container>
  )
} 
