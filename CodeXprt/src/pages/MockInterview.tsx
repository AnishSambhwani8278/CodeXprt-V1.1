import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, List, Loader2, CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'YOUR_API_KEY';

const interviewTypes = [
  'Software Engineer',
  'Data Scientist',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'AI/ML Engineer',
  'Cybersecurity Analyst',
  'Cloud Engineer',
];

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

function MockInterview() {
  const [selectedInterview, setSelectedInterview] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleInterviewTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInterview(e.target.value);
  };

  const generateQuestions = async () => {
    setLoading(true);
    setError('');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setScore(0);
    setShowResults(false);
    setStartTime(Date.now());
    setEndTime(0);

    try {
      if (!API_KEY) {
        setError('Gemini API key is missing. Please configure it.');
        return;
      }

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `Generate 20 multiple-choice questions for a ${selectedInterview} interview. Each question should have 4 options (A, B, C, D) and indicate the correct answer. Format the response as a JSON array of objects with "question", "options", and "correctAnswer" keys. Return only a JSON object with no markdown formatting, no backticks, and no explanations.`;

      console.log('Sending prompt to Gemini API:', prompt);

      const result = await model.generateContent(prompt);
      const response = result.response;
      let text = response.text();

      console.log('Raw response from Gemini API:', text);

      text = text.replace(/```(json)?\n/g, '').replace(/```/g, '');

      try {
        const parsedQuestions = JSON.parse(text);
        console.log('Parsed questions:', parsedQuestions);
        setQuestions(parsedQuestions);
      } catch (parseError: any) {
        console.error('Error parsing Gemini response:', parseError);
        setError(`Failed to parse questions from AI: ${parseError.message}. Please try again.`);
      }
    } catch (e: any) {
      console.error('Error generating questions:', e);
      setError(`Error generating questions: ${e.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setUserAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    setUserAnswer('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setEndTime(Date.now());
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setScore(0);
    setShowResults(false);
    setStartTime(0);
    setEndTime(0);
  };

  const calculateTimeTaken = () => {
    if (!startTime || !endTime) return '0 seconds';
    const timeInSeconds = (endTime - startTime) / 1000;
    return `${timeInSeconds} seconds`;
  };

  const graphData = [
    { skill: 'Algorithms', score: Math.floor(Math.random() * 100), color: 'bg-blue-500' },
    { skill: 'Data Structures', score: Math.floor(Math.random() * 100), color: 'bg-green-500' },
    { skill: 'System Design', score: Math.floor(Math.random() * 100), color: 'bg-purple-500' },
    { skill: 'Problem Solving', score: Math.floor(Math.random() * 100), color: 'bg-yellow-500' },
    { skill: 'Code Quality', score: Math.floor(Math.random() * 100), color: 'bg-red-500' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
        <span style={{ color: '#3A83F6' }}>Code</span>
        <span style={{ color: '#A855F8' }}>Xprt</span>
        <span style={{ marginLeft: '10px' }}>Mock Interview</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Prepare for your next technical interview with AI-generated questions designed to test your knowledge, improve your problem-solving skills
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Interview Type:
          </label>
          <select
            value={selectedInterview}
            onChange={handleInterviewTypeChange}
            className="w-full p-2 border rounded-md text-gray-800 bg-white dark:bg-gray-700 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow shadow-sm"
          >
            <option value="">Choose an interview type</option>
            {interviewTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button
            onClick={generateQuestions}
            disabled={!selectedInterview || loading}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            {loading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Questions...
              </div>
            ) : (
              'Generate Questions'
            )}
          </button>

          {error && (
            <div className="text-red-500">{error}</div>
          )}

          {questions.length > 0 && !showResults && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {questions[currentQuestionIndex].question}
              </p>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full py-2 px-4 rounded-md text-left ${
                      userAnswer === option
                        ? 'bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    } transition-colors`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={!userAnswer}
                className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Question
              </button>
            </div>
          )}

          {showResults && (
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Results
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                You scored {score} out of {questions.length}
              </p>
              <p className="text-gray-600 dark:text-gray-300 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Time taken: {calculateTimeTaken()}
              </p>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skill Performance</h3>
                <div className="space-y-3">
                  {graphData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{data.skill}</span>
                      <div className="w-2/3 bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${data.color}`}
                          style={{ width: `${data.score}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{data.score}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRestart}
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Restart
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default MockInterview;
