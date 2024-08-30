let userInput=document.getElementById("date");
let calculateBtn=document.getElementById("calculate-btn");
// userInput.max= new Date().toISOString().split('T')[0];
let result=document.getElementById("result");
  
calculateBtn.addEventListener('click',calculateAge);

function calculateAge(){
    if(userInput.value==="")
    {
        alert("Please enter date of birth");
    }
    else{
         const dob= new Date(userInput.value)
         const dob_year = dob.getFullYear();
         const dob_month= dob.getMonth() + 1;
         const dob_date=dob.getDate();


        // current
        const today= new Date();
        const today_year= today.getFullYear();
        const today_month=today.getMonth() +1 ;
        const today_date=today.getDate();

        let year,month,date;

             year=today_year - dob_year;

        if(today_month >= dob_month){
            month=today_month- dob_month;
        }
        else{
            year--
            month= 12 + today_month- dob_month;
        }
         
        if(today_date >=dob_date )
        {
              date=today_date - dob_date;
        }
        else{
         month--;
         noOfDaysInDob=daysInMonth(dob_month,dob_year)
         date=  noOfDaysInDob + today_date - dob_date;
           
        }
        if(month<0){
            month=11;
            year--;
        }
         result.innerHTML=`you are <span>${date}</span> days <span>${month}</span>  months <span>${year}</span> years old`;
    }

  
 
}