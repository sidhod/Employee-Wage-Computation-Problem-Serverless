'use strict';
module.exports.calculateWageNoWorkingDays = async () => {
    var IS_Full_Time = 1;
    var IS_Part_Time = 2;
    var EMP_RATE_PER_HOUR = 20;
    var NO_OF_WORKING_DAYS = 20;
    var MAX_HRS_IN_MONTH = 100;
    var empHrs = 0;
    var empWage = 0;
    var totalEmployeeWage = 0;
    var totalEmpHrs = 0;
    var totalWorkingDays = 0;
    while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
        totalWorkingDays++;
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
        empWage = empHrs * EMP_RATE_PER_HOUR;
        totalEmployeeWage = empWage + totalEmployeeWage;
    }
    return `Total Employee Wage of Month:${totalEmployeeWage}`;
};

