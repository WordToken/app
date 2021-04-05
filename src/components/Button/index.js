import * as React from 'react'
import styled from 'styled-components'


const Button = ({ value, handleClick, isDisabled }) => {
    const classNames = `btn btn-sm btn-success ${isDisabled && 'disabled'}`

    return (<ButtonWrapper className={classNames} onClick={handleClick}>{value}</ButtonWrapper>)
}


export default Button


const ButtonWrapper = styled.div`
`