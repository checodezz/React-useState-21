import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscription, setSubscription] = useState("");
  const [interests, setInterests] = useState([]);
  const [updates, setUpdates] = useState("");
  const [comments, setComments] = useState("");
  const [data, setData] = useState(false);

  const interestHandler = (event) => {
    let value = event.target.value;
    if (value) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const updatesHandler = (event) => {
    setUpdates(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (interests.length === 0) {
      alert("Please Select one or more interest.");
    }

    if (name && email && subscription && updates) {
      setData(true);
    }
  };

  return (
    <main>
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label htmlFor="plan">Subscription Plan:</label>
        <select
          id="plan"
          required
          onChange={(event) => setSubscription(event.target.value)}
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>{" "}
          <option value="Ultimate">Ultimate</option>
        </select>
        <br /> <br />
        <label>Interests:</label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Technology"
            onChange={interestHandler}
          />
          Technology
        </label>
        <br />
        <label>
          <input type="checkbox" value="Fitness" onChange={interestHandler} />
          Fitness
        </label>
        <br />
        <label>
          <input type="checkbox" value="Cooking" onChange={interestHandler} />
          Cooking
        </label>
        <br /> <br />
        <label>Want to Recieve Updates:</label>
        <br />
        <label>
          <input
            type="radio"
            value="Yes"
            name="updates"
            required
            onChange={updatesHandler}
          />
          Yes
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="No"
            name="updates"
            onChange={updatesHandler}
          />
          No
        </label>
        <br /> <br />
        <label>Comments:</label>
        <br />
        <textarea
          rows="4"
          cols="40"
          onChange={(event) => setComments(event.target.value)}
        />
        <br />
        <br />
        <button type="submit">Subscribe</button>
      </form>
      {data && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription Plan: {subscription}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Want to receive updates: {updates}</p>
          <p>Comments: {comments ? comments : "none"}</p>
        </div>
      )}
    </main>
  );
}
