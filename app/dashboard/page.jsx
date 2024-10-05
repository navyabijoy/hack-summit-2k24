// "use client"
// import { useUser } from '@clerk/nextjs';
// import mongoose from 'mongoose';
// import Course from '../../models/Course';
// import Quiz from '../../models/Quiz';

// export const dynamic = 'force-dynamic';
// async function getData() {
//     const { user } = useUser();
//     const userId = user.id;


//     if (!userId) {
//         return { courses: [], quizzes: [] };
//     }

//     try {
//         if (!mongoose.connections[0].readyState) {
//             await mongoose.connect(process.env.MONGODB_URI);
//         }

//         const courses = await Course.find({ userId });
//         const quizzes = await Quiz.find({ userId });

//         return { courses, quizzes };
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return { courses: [], quizzes: [] };
//     }
// }


// export default async function Dashboard() {
//   const { courses, quizzes } = await getData();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Your Courses</h2>
//           {courses.length > 0 ? (
//             <ul>
//               {courses.map((course) => (
//                 <li key={course._id}>{course.title}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No courses found.</p>
//           )}
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Your Quizzes</h2>
//           {quizzes.length > 0 ? (
//             <ul>
//               {quizzes.map((quiz) => (
//                 <li key={quiz._id}>
//                   {quiz.title} - Score: {quiz.score}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No quizzes found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import Greeting from'../dashboard/components/greeting'

function Dashboard(){
    return(
        <div>
            <Greeting />
        </div>
    )
}

export default Dashboard
