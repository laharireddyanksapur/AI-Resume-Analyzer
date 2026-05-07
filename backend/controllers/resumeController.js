const analyzeResume = async (req, res) => {
  try {
    const { resumeText } = req.body;

    const atsScore = Math.floor(Math.random() * 20) + 80;

    const suggestions = [
      "Add more Spring Boot and Microservices keywords",
      "Include measurable backend performance improvements",
      "Add cloud deployment experience using AWS",
      "Improve project descriptions with REST API integrations",
    ];

    res.status(200).json({
      atsScore,
      suggestions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Resume analysis failed",
    });
  }
};

module.exports = {
  analyzeResume,
};

