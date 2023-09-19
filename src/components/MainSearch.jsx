import { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import PreferButton from "./PreferButton";
import { getJobsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const jobsHasError = useSelector((state) => state.jobs.hasError);
  const jobsErrorMessage = useSelector((state) => state.jobs.errorMessage);

  const isLoading = useSelector((state) => state.jobs.isLoading);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobsAction(baseEndpoint, query));
  };

  return (
    <>
      <PreferButton />
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
          </Col>

          <Col xs={10} className="mx-auto mb-5">
            {isLoading ? (
              <Container className="text-center mt-5">
                <Spinner variant="success" />
              </Container>
            ) : jobsHasError ? (
              <Alert variant="danger">{jobsErrorMessage}</Alert>
            ) : (
              jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainSearch;
