import Heart from "./Heart";
import {useEffect, useContext, useState} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Galeria = () => {
    const [fotos, setFotos] = useState([]);
    const consultarinfo = async () => {
      const url = '/fotos.json'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setFotos(data.photos);
  }
  useEffect(() => {
    consultarinfo()
  }, []);
  
  
  return (
    <Container>
    <Row xs={1} md={5} className="g-4">
      {fotos.map((foto) => (
        <Col className='mb-3' key={foto.id}>
          <Card>
            <Card.Img variant="top" src={foto.src.medium} style={{width: "200px" , height: "100px"}} />
            <Card.Body>
              <Card.Text>{foto.alt}</Card.Text>
              <Button variant="primary">
                <i className="bi bi-heart"></i> Me gusta
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
    );
}
export default Galeria