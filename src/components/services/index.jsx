import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceElements'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-4.svg'
const Services = () => {
  return (
    <ServicesContainer  id='services'>
        <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Forge yourself</ServicesH2>
                    <ServicesP>Forge yourself young chap, forge yourself into something, ANYTHING but average </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>To be or not to be?</ServicesH2>
                    <ServicesP>To be or not be successful? Imagine someone saying no.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Unlock your true potential</ServicesH2>
                    <ServicesP>You're suffering from self doubt while others are intimidated by your full potential</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services