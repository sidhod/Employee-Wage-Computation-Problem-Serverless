'use strict';
module.exports.calculateEmployeeWage = async (event, contex, callback) => {
    const IS_Full_Time = 1;
    let data = JSON.parse(event.body);
    console.log(data);
    var empHrs = 0;
    var empWage = 0;
    var empCheck = Math.floor(Math.random() * 2) + 0;
    if (empCheck == IS_Full_Time)
        empHrs = 8;
    else
        empHrs = 0;
    empWage = empHrs * data.EMP_RATE_PER_HOUR;
    callback(null, {
        statusCode: 200,
        body: `Emp Wage: ${empWage}`
    })

};

