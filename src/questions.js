
const questions = [
  {
    id: 1,
    category: "General Knowledge",
    difficulty: "Easy",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    category: "Science",
    difficulty: "Medium",
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    id: 3,
    category: "General Knowledge",
    difficulty: "Hard",
    question: "Which year did the World War II end?",
    options: ["1942", "1945", "1939", "1950"],
    answer: "1945",
  },
  {
    id: 4,
    category: "Math",
    difficulty: "Easy",
    question: "What is the square root of 64?",
    options: ["6", "8", "7", "9"],
    answer: "8",
  },
  {
    id: 5,
    category: "Math",
    difficulty: "Medium",
    question: "What is the derivative of x²?",
    options: ["x", "2x", "x²", "2"],
    answer: "2x",
  },
  {
    id: 6,
    category: "Math",
    difficulty: "Hard",
    question: "What is the integral of 1/x dx?",
    options: ["ln|x| + C", "x", "1/x²", "e^x"],
    answer: "ln|x| + C",
  },
  {
    id: 7,
    category: "History",
    difficulty: "Easy",
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"],
    answer: "George Washington",
  },
  {
    id: 8,
    category: "History",
    difficulty: "Medium",
    question: "In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    answer: "1947",
  },
  {
    id: 9,
    category: "History",
    difficulty: "Hard",
    question: "Who wrote the Indian Constitution?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
    answer: "B. R. Ambedkar",
  },
  {
    id: 10,
    category: "Science",
    difficulty: "Easy",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
  {
    id: 11,
    category: "Science",
    difficulty: "Hard",
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
    answer: "Mitochondria",
  },
  {
    category: "General",
    difficulty: "Easy",
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    category: "General",
    difficulty: "Easy",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },

  // General - Medium
  {
    category: "General Knowledge",
    difficulty: "Medium",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Homer", "Tolkien", "Dickens"],
    answer: "Shakespeare",
  },
  {
    category: "General Knowledge",
    difficulty: "Medium",
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },

  // General - Hard
  {
    category: "General Knowledge",
    difficulty: "Hard",
    question: "In what year did the Berlin Wall fall?",
    options: ["1989", "1975", "1991", "1961"],
    answer: "1989",
  },
  {
    category: "General Knowledge",
    difficulty: "Hard",
    question: "Which scientist developed the theory of general relativity?",
    options: ["Einstein", "Newton", "Bohr", "Tesla"],
    answer: "Einstein",
  },
  {
    category: "General Knowledge",
    difficulty: "Easy",
    question: "Where is the flag hoisted on Independence Day?",
    options: ["Taj Mahal", "Red Fort", "Golden Temple", "Sun Temple"],
    answer: "Red Fort",
  },
  // Science - Easy
  {
    category: "Science",
    difficulty: "Easy",
    question: "What is H2O commonly known as?",
    options: ["Salt", "Oxygen", "Water", "Hydrogen"],
    answer: "Water",
  },
  {
    category: "Science",
    difficulty: "Easy",
    question: "What gas do humans need to breathe?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Oxygen",
  },

  // Science - Medium
  {
    category: "Science",
    difficulty: "Medium",
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    category: "Science",
    difficulty: "Medium",
    question: "What part of the plant conducts photosynthesis?",
    options: ["Stem", "Leaf", "Root", "Flower"],
    answer: "Leaf",
  },

  // Science - Hard
  {
    category: "Science",
    difficulty: "Hard",
    question: "Which of the following antiseptic compounds is present in Dettol?",
    options: ["Cresol", "Iodine", "Chloroxylenol", "Biothional"],
    answer: "Chloroxylenol",
  },
  {
    category: "Science",
    difficulty: "Hard",
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au",
  },
  {
  category: "Math",
  difficulty: "Easy",
  question: "What is 7 + 5?",
  options: ["10", "11", "12", "13"],
  answer: "12"
},
{
  category: "Math",
  difficulty: "Easy",
  question: "What is the square root of 16?",
  options: ["2", "4", "8", "16"],
  answer: "4"
},
{
  category: "Math",
  difficulty: "Medium",
  question: "Solve: 3x - 7 = 11. What is x?",
  options: ["6", "7", "9", "10"],
  answer: "6"
},
{
  category: "Math",
  difficulty: "Medium",
  question: "What is the value of π (pi) to 2 decimal places?",
  options: ["3.14", "3.15", "3.13", "3.16"],
  answer: "3.14"
},
{
  category: "Math",
  difficulty: "Hard",
  question: "If f(x) = 2x² - 3x + 1, what is f(2)?",
  options: ["3", "5", "7", "8"],
  answer: "3"
},
{
  category: "Math",
  difficulty: "Hard",
  question: "What is the derivative of x³?",
  options: ["3x", "3x²", "x²", "3x³"],
  answer: "3x²"
},
{
  category: "History",
  difficulty: "Easy",
  question: " The Poona Pact (1932) was an agreement between?",
  options: ["Nehru and Ambedkar", "Gandhi and Ambedkar", "Malaviya and Ambedkar", "Gandhi and Nehru"],
  answer: "Gandhi and Ambedkar"
},
{
  category: "History",
  difficulty: "Easy",
  question: "In which of the following countries “Subhash Chandra Bose” organized the “Tiger Legion”?",
  options: ["Singopore", "Japan", "Italy", "Germany"],
  answer: "Germany"
},
{
  category: "History",
  difficulty: "Medium",
  question: "Who wrote the Indian Constitution?",
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
  answer: "B. R. Ambedkar"
},
{
  category: "History",
  difficulty: "Medium",
  question: "The Cold War was mainly between which two countries?",
  options: ["USA and Japan", "USA and USSR", "UK and Germany", "China and India"],
  answer: "USA and USSR"
},
{
  category: "History",
  difficulty: "Hard",
  question: "When did the French Revolution begin?",
  options: ["1776", "1789", "1804", "1812"],
  answer: "1789"
},
{
  category: "History",
  difficulty: "Hard",
  question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
  options: ["Queen Victoria", "King George V", "King Henry VIII", "Queen Anne"],
  answer: "Queen Victoria"
}


];

export default questions;
