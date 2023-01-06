import React, {ReactNode} from 'react';
import styled from "styled-components";
import {cls} from "../../utils/classNameUtil";

const RowWrapper = styled.div`
  box-sizing: border-box; 
`

interface RowProps {
    children: ReactNode;
    className?: string;
}

export default function Row({children, className}: RowProps) {
    return (
        <RowWrapper className={cls("row", className)}>
            {children}
        </RowWrapper>
    )
}