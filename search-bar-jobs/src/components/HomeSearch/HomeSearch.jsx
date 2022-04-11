import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Jumbotron,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
//import { connect } from "react-redux";
import { addToFavAction } from "../../redux/actions";
import {  useDispatch } from 'react-redux'




/* const mapStateToProps=(state) => ({

})

const mapDispatchToProps =(dispatch) => ({
  addToFav: (company) => {
    dispatch(addToFavAction(company))
  },
}) */



const HomeSearch = (props) => {
  const [job, setJob] = useState([]);
  const [input, setInput] = useState("");


  useEffect(() => {
    fetchJobs();
  }, []);

  const dispatch = useDispatch()






  const fetchJobs = async (query) => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?search=${query || "developer"}&limit=10`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setJob(data.data);
    } else {
      console.log("There was an error");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs(input);
  };

  return (
    <>
      <Jumbotron fluid id="jumbotron-home">
        <Container>
          <Row>
            <Col md={4}>
              <h4 style={{ color: "#2F2E41" }}>Start your Search</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={input}
                  onChange={handleChange}
                  placeholder="Search for..."
                />
              </Form>
            </Col>
            <Col md={8}>
              <img src="/assets/img1.png" alt="" id="img-jumbo" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className="my-5">
        <Row>
          {" "}
          {job.map((el) => (
           <>
              <Col md={3}>
                <Card className="mt-3" id="card">
                  <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>{el.category}</Card.Text>
                    <Card.Text>
                      <Link to={`/${el.company_name}`}>{el.company_name}</Link>
                    </Card.Text>
             
                     
                        <Button variant="dark"
                        onClick={()=>{
                         //props.addToFav(el)
                         dispatch(addToFavAction(el))
                        }}
                        >Add to Favourite</Button>
                    
                  </Card.Body>
                </Card>
              </Col>
      
           </>
          ))}{" "}
        </Row>
      </Container>
      
    </>
  );
};

//export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);
export default HomeSearch
