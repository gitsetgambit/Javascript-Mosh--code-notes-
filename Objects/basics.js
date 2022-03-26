// object oriented programming 
const college = {
    studentNum : 3000,
    location: "Meerut",
    dept: {
        CS : 1,
        Mech : 2,
    },
    admission : true,
    teachersQualification : function(){
        console.log("PHD");
    }
};

// we are not calling a function we are calling a method 
college.teachersQualification();