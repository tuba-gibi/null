import nbaLogo from "./assets/nba-logo.png";
import { Container } from "react-bootstrap/Container";
import {Image} from "react-bootstrap/Image"

const Header = () => {
  return (
    <Container className="text-center mt-4" >
      <Image src={nbaLogo} width="200px " ></Image>
      <h1>NBA Legends</h1>
    </Container>
  )
}

export default Header
