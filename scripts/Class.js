
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

    
}
