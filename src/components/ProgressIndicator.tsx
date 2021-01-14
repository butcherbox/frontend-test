import React from 'react'
import styled from '@emotion/styled'

type Props = {
   current: number
   max: number
}
const ProgressIndicator: React.FC<Props> = ({ current, max }) => {
   return (
      <IndicatorWrapper>
         <Current currentCount={current} maxCount={max} aria-hidden={true} />
         <Text>
            {current} of {max}
         </Text>
      </IndicatorWrapper>
   )
}

export default ProgressIndicator

const IndicatorWrapper = styled.div`
   align-items: center;
   background-color: ${props => props.theme.colors.gray400};
   display: flex;
   height: 48px;
   justify-content: center;
   position: relative;
`

const Text = styled.div`
   position: relative;
   z-index: 1;
`
const Current = styled.div<{ currentCount: number, maxCount: number }>`
   background-color: ${props => props.theme.colors.gray900};
   position: absolute;
   left: 0;
   top: 0;
   bottom: 0;
   width: ${props => (props.currentCount / props.maxCount) * 100}%;
`