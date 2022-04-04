import { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./company.css";

const CompanyDetails = () => {
  const { company } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`
    );
    const data = await response.json();
    setJobs(data.data);
    console.log(data.data);
  };

  return (
    <Container className="mt-5 p-5">
      <h4 className="mt-5 mb-5">All the available Jobs listed by: {company}</h4>
      <Row>
        {jobs.map((job) => (
          <Col>
            <Card id="card">
              <Card.Header id="header">{job.category}</Card.Header>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyDetails;
