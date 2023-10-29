import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";

function LearnEnglishPage() {
  const [userRating, setUserRating] = useState(1); // Initialize with the user's starting rating
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [token, setToken] = useState(null);
  const storedToken = localStorage.getItem("token");
  const [question, setQuestion] = useState(null);
  const [ratingChangeMessage, setRatingChangeMessage] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    //fetching user's current rating email and unique id
    axios
      .get("https://trial3-production.up.railway.app/api/auth", {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserId(response.data._id);
        setUserRating(response.data.ratingEng);
        setUserEmail(response.data.email);

        fetchQuestion(response.data._id, response.data.ratingEng);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const updateRating = (newRating) => {
    // Make an API call to update the user's rating
    axios
      .put("https://trial3-production.up.railway.app/api/ratingEng", { userEmail, newRating })
      .then((response) => {
        console.log("User rating updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user rating:", error);
      });
  };

  const fetchQuestion = (userId, rating) => {
    axios
      .get(`https://trial3-production.up.railway.app/api/questions/${userId}/${rating}`)
      .then((response) => {
        const questionData = response.data.question;
        setQuestion(questionData);
      })
      .catch((error) => {
        console.error("Error fetching question:", error);
        setQuestion(null);
      });
  };

  const handleUserResponse = (selectedOption) => {
    // Get the current question
    const currentQuestion = question;
    console.log(userRating);
    console.log(userEmail);
    console.log(userId);
    // Check if the selected option is correct
    const isCorrect = currentQuestion.correctAnswer === selectedOption;

    // Update user's rating based on the question's increase and decrease amounts
    if (isCorrect) {
      // Increase the user's rating
      const newRating = userRating + currentQuestion.IncreaseAmount;
      console.log("user's new rating after correctly responding", newRating);
      console.log("increaseAmount", currentQuestion.IncreaseAmount);
      setUserRating(newRating);
      updateRating(newRating);
      setRatingChangeMessage(
        `Congratulations! Your rating has increased by ${currentQuestion.IncreaseAmount}. New Rating: ${newRating}`
      );
      fetchQuestion(userId, newRating);
    } else {
      // Decrease the user's rating
      console.log("decreaseamount of question", currentQuestion.decreaseAmount);
      let newRating = userRating - currentQuestion.decreaseAmount;
      if (newRating <= 0) {
        newRating = 1;
      }
      console.log("user's new rating after incorrectly responding", newRating);
      setUserRating(newRating);
      updateRating(newRating);
      setRatingChangeMessage(
        `Oops! Wrong answer. Your rating has decreased by ${currentQuestion.decreaseAmount}. New Rating: ${newRating}`
      );
      fetchQuestion(userId, newRating);
    }
  };

  const renderQuestion = () => {
    if (question == null) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <Navbar />
        <div class={styles.mainContainer}>
          <div className={styles.questionBox}>
            <h1>Here's your question:</h1>
            {ratingChangeMessage && (
              <p className={styles.ratingChange}>{ratingChangeMessage}</p>
            )}
            {question ? (
              <div>
                <p className={styles.quesText}>{question.text}</p>
                <div className={styles.optionTable}>
                  {question.options.map((option, index) => (
                    <button
                      className={styles.optionButton}
                      onClick={() => handleUserResponse(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className={styles.score}>
                  <p>Increase: + {question.IncreaseAmount}</p>
                  <p>Decrease: - {question.decreaseAmount}</p>
                </div>
              </div>
            ) : (
              <p>No question found for the user's rating.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
}

export default LearnEnglishPage;
