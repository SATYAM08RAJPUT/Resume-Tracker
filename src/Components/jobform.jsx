import { useState } from "react";

const JobForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
    notes: "",
    resumeLink: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now(), dateapplied: new Date().toISOString() });
    setForm({
      company: "",
      position: "",
      status: "applied",
      notes: "",
      resumeLink: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          name="position"
          placeholder="Position"
          value={form.position}
          onChange={handleChange}
          required
        />
        <select>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Reject</option>
        </select>
        <input name="resumeLink" placeholder="Resume Link" />
        <textarea
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />
        <button>Add Job</button>
      </form>
    </>
  );
};

export default JobForm;
