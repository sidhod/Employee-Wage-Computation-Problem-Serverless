'use strict';
module.exports.implementationSwitchCase = async (event, contex, callback) => {
    const IS_Full_Time = 1;
    const IS_Part_Time = 2;
    //var EMP_RATE_PER_HOUR = 20;
    let data = JSON.parse(event.body);
    console.log(data);
    var empHrs = 0;
    var empWage = 0;
    var empCheck = Math.floor(Math.random() * 3) + 0;
    switch (empCheck) {
        case IS_Part_Time:
            empHrs = 4;
            break;
        case IS_Full_Time:
            empHrs = 8;
            break;
        default:
            empHrs = 0;
    }
    empWage = empHrs * data.EMP_RATE_PER_HOUR;
    callback(null, {
        statusCode: 200,
        body: `Emp Wage: ${empWage}`
    })

}

