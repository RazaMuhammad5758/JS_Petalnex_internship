const course = {
    courseName: "Physics",
    price: 1000,
    courseInstructor: "Raza"
}

// ab object ki values print krwany k course.price ye b tariqa h pr ak or syntax b h

const {price} = course // object ki price print krwany ka tariqa h

const {courseInstructor: Instructor} = course  // object ki key change krny ka tariqa

// is tariqe se hum value ka name change b kr skty hen (de_structuring)

console.log(price);
console.log(Instructor);
