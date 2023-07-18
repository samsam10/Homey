// // src/components/ReviewDisplay.tsx
// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// // import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import {Add} from  '@mui/icons-material'
// // import { useList } from '@pankod/refine-core'
// import { LogicalFilter, useTable } from '@pankod/refine-core'
// // instead of useList, we use useTable. it's powerful and will allow us do pagination, filtering and sorting all in one hook
// import {Box, Stack, Typography, TextField, Select, MenuItem} from '@pankod/refine-mui'
// import { useNavigate } from '@pankod/refine-react-router-v6'
// import { useMemo } from 'react'
// import { PropertyCard, CustomButton } from 'components'
// import { title } from 'process'


// interface ReviewDisplayProps {
//   reviews: string[];
// }

// const ReviewDisplay: React.FC<ReviewDisplayProps> = ({ reviews }) => {
//   return (
//     <Box mt="20px" sx={{display:'flex', flexWrap:'wrap', gap:3 }}>
//       <Grid container spacing={2}>
//         {reviews.map((review, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card style={{ height: "100%" }}>
//               <CardContent>
//                 <Typography variant="body1">{review}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

  


// </Box>
//   );
// };

// export default ReviewDisplay;

import React from 'react'

const reviewDisplay = () => {
  return (
    <div>reviewDisplay</div>
  )
}

export default reviewDisplay
