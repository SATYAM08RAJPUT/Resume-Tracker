import { useState, useEffect } from "react";
import "./App.css";
import JobForm from "./Components/jobform";
import JobList from "./Components/jobList";
import Dashboard from "./Components/Dashboard";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = localStorage.getItem("jobs");
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([job, ...jobs]);
  };
  return (
    <>
      <h2>JOB APPLIED TRACKER</h2>
      <JobForm onAdd={addJob} />
      <Dashboard jobs={jobs} />
      <JobList jobs={jobs} />
    </>
  );
}

export default App;
