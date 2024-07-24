import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schoolName: "Springdale Public School",
  logo: "logo.png",
  introduction: "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
  highlights: [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity",
  ],
  aboutUs: {
    history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
    vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    infrastructure: [
      "State-of-the-art science and computer labs",
      "Spacious and well-equipped classrooms",
      "Library with a vast collection of books and digital resources",
      "Sports facilities including a playground, gymnasium, and swimming pool",
    ],
  },
  // Additional dummy data for other sections...
};

const schoolSlice = createSlice({
  name: 'school',
  initialState,
  reducers: {},
});

export const { actions, reducer } = schoolSlice;
export default reducer;
