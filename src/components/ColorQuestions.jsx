import { useState } from "react";
import Container from "./Container";

const questions = [
  { text: "Do you have warm undertones in your skin?", category: "Spring" },
  { text: "Is your natural hair color lighter than medium brown?", category: "Spring" },
  { text: "Do bright and lively colors with high brightness and low saturation levels enhance your appearance?", category: "Spring" },
  { text: "Do you feel that vibrant and energetic colors suit you best?", category: "Spring" },
  { text: "Do you have cool undertones in your skin?", category: "Summer" },
  { text: "Is your natural hair color lighter than medium brown?", category: "Summer" },
  { text: "Do soft colors with high brightness and low saturation levels complement your look?", category: "Summer" },
  { text: "Do gentle and soothing colors make your complexion appear more vibrant?", category: "Summer" },
  { text: "Do you have warm undertones in your skin?", category: "Autumn" },
  { text: "Is your natural hair color darker than medium brown?", category: "Autumn" },
  { text: "Do softer hues with low brightness and saturation levels suit you?", category: "Autumn" },
  { text: "Do warm and homely colors enhance your overall appearance?", category: "Autumn" },
  { text: "Do you have cool undertones in your skin?", category: "Winter" },
  { text: "Is your natural hair color darker than medium brown?", category: "Winter" },
  { text: "Do strong colors with low brightness and high saturation levels look best on you?", category: "Winter" },
  { text: "Do bold and impactful colors make your features stand out?", category: "Winter" }
];

const seasonDetails = {
  Spring: {
    description: "In Korean color analysis, you're a 'Bright Spring' (봄 브라이트). You look best in clear, warm, and bright colors with medium to high chroma.",
    colors: ["#FF4500", "#FFA500", "#FFD700", "#00FF00", "#1E90FF"],
    imageContent: "Cherry blossoms, fresh green leaves, and bright sunshine",
    image: "https://singlecolorimage.com/get/FFA500/500x500",
    link: "https://singlecolorimage.com/",
    commonColor: "#FFA500",
    contrast: "Korean analysis focuses more on skin undertone and brightness, recommending vivid, clear colors. Western methods might emphasize hair and eye color more, potentially suggesting a broader range of warm, clear colors."
  },
  Summer: {
    description: "In Korean analysis, you're a 'True Summer' (여름 트루). You suit cool, soft colors with medium brightness and low to medium chroma.",
    colors: ["#4169E1", "#DB7093", "#20B2AA", "#DDA0DD", "#B0C4DE"],
    imageContent: "Lavender fields, soft blue sky, and pastel flowers",
    image: "https://singlecolorimage.com/get/B0C4DE/500x500",
    link: "https://singlecolorimage.com/",
    commonColor: "#B0C4DE",
    contrast: "Korean analysis emphasizes softer, more muted cool tones for Summer types. Western analysis might include a wider range of cool colors, including some brighter options, based on overall coloring rather than just skin undertone."
  },
  Autumn: {
    description: "Korean analysis classifies you as 'Deep Autumn' (가을 딥). You shine in warm, rich colors with low to medium brightness and medium to high chroma.",
    colors: ["#8B4513", "#DAA520", "#CD853F", "#556B2F", "#800000"],
    imageContent: "Rich autumn leaves, pumpkins, and warm earth tones",
    image: "https://singlecolorimage.com/get/DAA520/500x500",
    link: "https://singlecolorimage.com/",
    commonColor: "#DAA520",
    contrast: "Korean analysis for Autumn types tends to favor deeper, more saturated warm colors. Western methods might include a broader spectrum of warm colors, including some lighter shades, based on hair and eye color as well as skin tone."
  },
  Winter: {
    description: "In Korean color theory, you're a 'True Winter' (겨울 트루). You look striking in cool, clear colors with high contrast and high chroma.",
    colors: ["#000080", "#8A2BE2", "#FF0000", "#00CED1", "#FFFFFF"],
    imageContent: "Snow-capped mountains, clear night sky, and icy blue glaciers",
    image: "https://singlecolorimage.com/get/000080/500x500",
    link: "https://singlecolorimage.com/",
    commonColor: "#000080",
    contrast: "Korean Winter palettes often include very high contrast, cool-toned colors. Western analysis might suggest a mix of cool and neutral colors, potentially including more earth tones based on overall coloring."
  }
};

const SeasonQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    Summer: 0,
    Autumn: 0,
    Winter: 0,
    Spring: 0
  });
  const [result, setResult] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = answer => {
    if (answer) {
      setScores(prev => ({
        ...prev,
        [questions[currentQuestion].category]:
          prev[questions[currentQuestion].category] + 1
      }));
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const season = Object.entries(scores).reduce((a, b) =>
      a[1] > b[1] ? a : b
    )[0];
    setResult(season);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      Summer: 0,
      Autumn: 0,
      Winter: 0,
      Spring: 0
    });
    setResult(null);
    setQuizStarted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (result) {
    const details = seasonDetails[result];
    return (
      <div className="m-4 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Your Color Analysis Result
        </h3>
        <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-md text-center">
          <p className="text-lg font-medium text-gray-700 mb-2">
            Your season is:
          </p>
          <p className="text-3xl cmderfont-bold text-indigo-600">{result}</p>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p className="mb-2">{details.description}</p>
          <div className="flex justify-center space-x-2 mb-2">
            {details.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <p className="text-center font-medium">
            Common Color:{" "}
            <span style={{ color: details.commonColor }}>
              {details.commonColor}
            </span>
          </p>
        </div>
        <div className="mt-4">
          <img
            src={details.image}
            alt={`${result} colors`}
            className="w-full rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1 italic">
            {details.imageContent}
          </p>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <h4 className="font-semibold mb-1">
            Contrast with Western Analysis:
          </h4>
          <p>{details.contrast}</p>
        </div>
        <div className="mt-4 text-center">
          <a
            href={details.link}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View your Korean color palette →
          </a>
        </div>
        <div className="mt-6 text-center">
          <button
            className="bg-primary text-white rounded-full py-2 px-4 hover:[background-color:#6458ae]"
            onClick={resetQuiz}>Retake Quiz</button>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <Container>
        <div className="m-5 flex flex-col justify-center items-center py-8 border-y border-gray-200 light:border-gray-800">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Discover Your Best Colors
          </h1>
          <p className="text-lg mb-6 text-gray-600">
            Answer the following questions to find out which color season best suits you!
          </p>
          <button
            className="relative bg-primary rounded-full flex h-11 w-full items-center justify-center px-6 text-gray-800 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:text-white hover:before:scale-105 hover:before:border-white hover:before:[background-color:#6458ae] active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
            onClick={startQuiz}
          >
            <span className="relative text-base font-semibold text-white light:text-white">Start Quiz</span>
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="m-5 flex flex-col justify-center items-center py-8 border-y border-gray-200 light:border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {questions[currentQuestion].text}
        </h2>
        <div className="m-5 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <button
            className="relative flex h-11 w-full items-center justify-center px-6 text-gray-800 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:text-white hover:before:scale-105 hover:before:border-white hover:before:[background-color:#6458ae] active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
            onClick={() => handleAnswer(true)}
          >
            <span className="relative">Yes</span>
          </button>
          <button
            className="relative flex h-11 w-full items-center justify-center px-6 text-gray-800 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:text-white hover:before:scale-105 hover:before:border-white hover:before:[background-color:#6458ae] active:duration-75 active:before:scale-95 light:before:border-gray-700 light:before:bg-gray-800 sm:w-max"
            onClick={() => handleAnswer(false)}
          >
            <span className="relative">No</span>
          </button>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-primary h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Container>
  );
};

export default SeasonQuiz;
