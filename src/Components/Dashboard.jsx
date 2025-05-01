const Dashboard = ({ jobs }) => {
  const interviews = jobs.filter((j) => j.status === "Interview").length;
  const offers = jobs.filter((j) => j.status === "Offer").length;
  const rejected = jobs.filter((j) => j.status === "Rejected").length;
  return (
    <>
      <div className="dashboard">
        <h2>Dashboard</h2>
        <p>Interviews: {interviews}</p>
        <p>Offers: {offers}</p>
        <p>Rejected: {rejected}</p>
      </div>
    </>
  );
};
export default Dashboard;
