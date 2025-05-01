const JobItems = ({ job }) => {
  return (
    <>
      <div className="job-item">
        <h3>
          {job.position} @ {job.company}
        </h3>
        <p>
          Status: <strong>{job.status}</strong>
        </p>
        {job.resumeLink && (
          <a href={job.resumeLink} target="_blank" rel="noreferrer">
            Resume
          </a>
        )}
        {job.notes && <p>📝 {job.notes}</p>}
        <small>
          Applied on: {new Date(job.dateapplied).toLocaleDateString()}
        </small>
      </div>
    </>
  );
};
export default JobItems;
