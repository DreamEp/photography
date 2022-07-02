import "./home2.css";
import styled from "styled-components";
import Header from './Header';
import Footer from './Footer';

/*const Header = styled.div`
  background: lightcoral;
  padding: 40px 0;
`;*/

const FullPageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;

  background: red;
  &:nth-child(1) {
    background: lightsteelblue;
  }
  &:nth-child(2) {
    background: lightGreen;
  }
`;

/*const Footer = styled.div`
  padding: 40px 0;
  background: lightBlue;
`;*/

export default function App() {
  return (
    <div className="App">
      <FullPageContainer>
        {/*<Header>Header</Header>*/}
        <ItemContainer> {/*= menu */}
          <Item>Item #1</Item>
          <Item>Item #2</Item>
          <Item>Item #3</Item>
        </ItemContainer>
      </FullPageContainer>
      {/*<Footer>Footer</Footer>*/}
    </div>
  );
}
