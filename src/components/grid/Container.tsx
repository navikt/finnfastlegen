import React, {ReactNode} from 'react';
import styled from "styled-components";
import {cls} from "../../utils/classNameUtil";

const ContainerWrapper = styled.div`
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-left: 8px;
  padding-right: 8px;
`

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export default function Container({children, className}: ContainerProps) {
    return (
        <ContainerWrapper className={cls("container", className)}>
            {children}
        </ContainerWrapper>
    )
}