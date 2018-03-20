
class EmpSchedule {
    constructor(Sch) {
        this.sch = Sch;
    }
    test_cal() {
        var Total = 0
        for (var i = 0; i < 27; i++)
            Total += this.sch[0][i + 1]
        alert(Total);
    }

    /*
    *   function: sum_date
    *   parameters:
    *   totalDays(number) : total days need to be sum
    *   totalEmps(number) : total emps in the sch
    *   
    */
    sum_Date(totalDays, totalEmps) {
        header = 2
        blockSumAll = totalEmps + 1 + header
        blockFirstSum = totalEmps + 2 + header
        blockSecondSum = totalEmps + 3 + header
        blockThirdSum = totalEmps + 4 + header
        for (var day=1;day<=totalDays;day++){
            dailySum = 0;
            dailyFirstSum = 0;
            dailySecondSum = 0;
            dailyThirdSum = 0;
            for(var emp=2;emp<=totalEmps;emp++){
                dailySum += this.sch[emp][day]
                if(this.sch[emp][day]==1){
                    dailyFirstSum += 1
                }else if(this.sch[emp][day]==2){
                    dailySecondSum += 1
                }else if(this.sch[emp][day]==3){
                    dailyThirdSum += 1
                }
            }
            this.sch[blockSumAll][day] = dailySum
            this.sch[blockFirstSum][day] =  dailyFirstSum
            this.sch[blockSecondSum][day] = dailySecondSum
            this.sch[blockThirdSum][day] = dailyThirdSum
        }
    }

    
}
