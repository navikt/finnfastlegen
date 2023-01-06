import React, {ReactNode} from 'react';
import styled from "styled-components";
import {cls} from "../../utils/classNameUtil";

const ColumnWrapper = styled.div`
  box-sizing: border-box; 
`

interface ColumnProps {
    children: ReactNode;
    className?: string;
}

export default function Column({children, className}: ColumnProps) {
    return (
        <ColumnWrapper className={cls("col", className)}>
            {children}
        </ColumnWrapper>
    )
}