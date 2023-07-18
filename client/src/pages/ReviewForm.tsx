// // src/components/ReviewForm.tsx
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// interface ReviewFormProps {
//   onSubmit: (review: string) => void;
// }

// const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
//   const [review, setReview] = useState("");

//   const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setReview(event.target.value);
//   };

//   const handleSubmit = () => {
//     onSubmit(review);
//     setReview("");
//   };

//   return (
//     <div>
//       <TextField
//         label="Write your review"
//         value={review}
//         onChange={handleReviewChange}
//         variant="outlined"
//         fullWidth
//         multiline
//         rows={4}
//       />
//       <Button variant="contained" color="primary" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </div>
//   );
// };

// export default ReviewForm;

import React from 'react'

const ReviewForm = () => {
  return (
    <div>ReviewForm</div>
  )
}

export default ReviewForm