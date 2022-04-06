import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import "../CompanyDetails/company.css";

const mapStateToProps = (state) => ({
  companies: state.companies.favourites,
});

const Favourites = ({ companies }) => {
  return (
    <div className="mt-5 py-5 container">
      <h4 className="mt-5 mb-5">❤️ Take a look at your Favourite Jobs:</h4>
      {companies.map((job, i) => (
        <div key={i}>
          <Card className="my-3">
           <Card.Header className="px-3" id="header">
               <h3>{job.title}</h3>
               </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h6>{job.company_name}</h6>
                    <p>{job.salary}</p>
                  </Card.Text>
                </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};


export default connect(mapStateToProps)(Favourites);
