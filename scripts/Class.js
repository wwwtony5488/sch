
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
        var header = 1
        var blockSumAll = totalEmps + 1 + header
        var blockFirstSum = totalEmps + 2 + header
        var blockSecondSum = totalEmps + 3 + header
        var blockThirdSum = totalEmps + 4 + header
        for (var day=1;day<=totalDays;day++){
            var dailySum = 0;
            var dailyFirstSum = 0;
            var dailySecondSum = 0;
            var dailyThirdSum = 0;
            for(var emp=2;emp<totalEmps+2;emp++){
                var c = parseInt(this.sch[emp][day])
                if(c.toString() == this.sch[emp][day]){
                    dailySum+=1
                }
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

    sum_EmpHours(totalDays, empRow){
        var empRow = empRow+1
        var workTime = 0
        for(var day=1;day<=totalDays;day++){
            var c = parseInt(this.sch[emp][day])
            if(c.toString()==this.sch[emp][day]){
                workTime += 8;
            }
        }
        return workTime
    }
    
    sum_AllHours(totalDays, totalEmps){
        var blockTotalHours = totalDays+3
        for (var emp=1;emp<=totalEmps;emp++){
            rowEmpMargin = 1
            empSumTime = this.sum_EmpHours(totalDays, emp)
            this.sch[emp+rwoEmpMargin][blockTotalHours] = empSumTime
        }
    }

    
}
