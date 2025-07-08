import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn TS+React",
        description: "Learn it in depth!",
      };
      return [...prev, newGoal];
    });
  };

  const handleDeleteGoal=(id: number)=>{
    setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !=id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
     <NewGoal/>
     <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
