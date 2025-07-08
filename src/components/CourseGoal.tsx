import { type PropsWithChildren } from "react";

//interface CourseGoalProps {title:string; children:ReactNode}
type CourseGoalProps=PropsWithChildren<{id: number; title: string; onDelete:(id:number)=>void;}>;

const CourseGoal = ({id, title, children, onDelete}:CourseGoalProps) => {
  //const CourseGoal:FC<CourseGoalProps>=({title, children})//same as above, just another way of writing it.
  return (
    <div>
      <h2>{title}</h2>
      {children}
     <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default CourseGoal