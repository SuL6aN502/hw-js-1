let javascript_Boot_camp = (teach)=>{
            alert("This javaScript BootCamp with " + teach + " OK?");
    }
    // الاستدعاء بتيتش واحد
    javascript_Boot_camp("Teacher1");
    // الاستدعاء بتيتش اثنان
    javascript_Boot_camp("Teacher2");

    // --------------------------------------
    let calculateAverage = (num1, num2) =>{
        let average = (num1 + num2) / 2;
        return average;
      }
      
      // لحساب المتوسط الحسابي بين عددين من الأعداد الصحيحة
      let integerAverage = calculateAverage(5, 10);
      console.log("المتوسط الحسابي للأعداد الصحيحة: " + integerAverage);
      
      // لحساب المتوسط الحسابي بين عددين من الأعداد العشرية
      let doubleAverage = calculateAverage(2.5, 7.8);
      console.log("المتوسط الحسابي للأعداد العشرية: " + doubleAverage);