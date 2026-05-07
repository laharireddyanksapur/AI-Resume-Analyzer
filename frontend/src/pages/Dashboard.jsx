import ResumeUpload from "../components/ResumeUpload";

function Dashboard() {
  return (
    <div className="container">
      <h1>AI Resume Analyzer</h1>
      <p>
        Upload your resume and get ATS optimization suggestions.
      </p>

      <ResumeUpload />
    </div>
  );
}

export default Dashboard;
