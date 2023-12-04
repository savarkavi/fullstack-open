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

const Total = ({ course }) => {
  const exercisesNum = course.parts.map((item) => item.exercises);
  const total = exercisesNum.reduce((acc, curr) => acc + curr, 0);
  return <p>Total: {total}</p>;
};

const Content = ({ course }) => {
  return (
    <div>
      <Part course={course} />
    </div>
  );
};

const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <div key={course.id}>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    );
  });
};

export default Course;
