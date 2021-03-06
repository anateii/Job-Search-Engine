//import { connect } from "react-redux";
import { Card, Col, Container, Row} from "react-bootstrap";
import "../CompanyDetails/company.css";
import { removeFromFavAction } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";




/* const mapStateToProps = (state) => ({
  companies: state.companies.favourites,
});


const mapDispatchToProps =(dispatch) => ({
  removeFromFav: (index) => {
    dispatch(removeFromFavAction(index))
  }
}) */


const Favourites = () => {

const companies = useSelector(state => state.companies.favourites)
const dispatch = useDispatch()



  return (
    <div className="mt-5 py-5 container">
      <h4 className="mt-5 mb-5 px-2"> ❤️Take a look at your Favourite Jobs:</h4>

      <Container>
        <Row>
      {companies.map((job, i) => (
       
      
            <Col key={i} sm={4}>
                <Card className="my-4" >
                 <Card.Header className="px-3" id="header">
                     <h3>{job.title}</h3>
                     </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <Link to={`/${job.company_name}`}>
                            <h6>{job.company_name}</h6>
                          </Link>
                          <p>{job.salary}</p>
                        </Card.Text>
                        <i onClick={()=>dispatch(removeFromFavAction(i))} class="bi bi-heartbreak"></i>
                      </Card.Body>
                </Card>
             </Col>
        
      ))}
      </Row>
      </Container>
    </div>
  );
};


//export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
export default Favourites