import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Job from "./Job";

const PreferList = () => {
  const favoriteList = useSelector((state) => state.favoriteList.content);
  console.log(favoriteList);
  return (
    <Container>
      <h1 className="text-center">Prefer List</h1>
      <Link to="/">
        <Button>go search</Button>
      </Link>
      <>
        {favoriteList.map((jobData) => (
          <Job key={jobData._id} data={jobData} />
        ))}
      </>
    </Container>
  );
};
export default PreferList;
