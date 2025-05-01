import JobItems from "./jobitem";

const JobList = ({ jobs }) => {
  return (
    <>
      <h2> Application</h2>
      {jobs.length === 0 ? (
        <p>No Job yet. </p>
      ) : (
        jobs.map((job) => <JobItems job={job} />)
      )}
    </>
  );
};
export default JobList;
