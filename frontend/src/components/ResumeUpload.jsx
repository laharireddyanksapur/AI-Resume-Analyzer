import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/resume/analyze",
        {
          resumeText,
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <textarea
        placeholder="Paste your resume here"
        rows="12"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>

      {result && (
        <div className="results">
          <h2>ATS Score: {result.atsScore}%</h2>

          <h3>Suggestions</h3>

          <ul>
            {result.suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
