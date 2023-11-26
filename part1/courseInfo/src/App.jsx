/* eslint-disable react/prop-types */

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ course }) => {
  return course.parts.map((part) => {
    return (
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>
    );
  });
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

const Total = ({ course }) => {
  let total = 0;
  const exercises = course.parts.map((part) => {
    return part.exercises;
  });

  exercises.forEach((num) => {
    total += num;
    return num;
  });
  return <p>Total: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
