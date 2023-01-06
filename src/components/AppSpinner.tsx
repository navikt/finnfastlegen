import React, { ReactElement } from "react";

interface Props {
  laster: boolean;
  children: ReactElement;
}

/*
const SpinnerContainer = styled(Row)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;
*/

const AppSpinner = ({ laster, children }: Props): ReactElement => {
  return laster ? <>Laster...</> : children;

  /*
    return laster ? (
      <SpinnerContainer>
        <NavFrontendSpinner type="XL">
          Vent litt mens siden laster
        </NavFrontendSpinner>
      </SpinnerContainer>
    ) : (
      children
    );
  */
};

export default AppSpinner;
