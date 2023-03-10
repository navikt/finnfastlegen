import React, { useEffect } from "react";
import Container from "./grid/Container";
import Row from "./grid/Row";
import Column from "./grid/Column";

export interface SideProps {
  children: React.ReactNode;
}

const Side = ({ children }: SideProps) => {
  useEffect(() => {
    document.title = "Fastlege";
  }, []);

  return (
    <>
      {children}
      {/*<Decorator />*/}

      <Container>
        <Row>
          <Column className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            {children}
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default Side;
