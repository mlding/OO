describe('pos', function() {
    var inputs;

    beforeEach(function() {
        inputs = [
            ["张三", "95", "80", "75", "80"],
            ["李四", "80", "70", "85", "90"],
            ["赵武", "100", "50", "85", "80"]
        ];
    });

    it('should print correct text', function() {

        spyOn(console, 'log');

        printInventory(inputs);

        var expectText =
            `成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================
张三|75|95|80|80|82.5|330
李四|85|80|70|90|81.25|325
赵武|85|100|50|80|78.75|315
========================
全班总平均分：323.33
全班总分中位数：325`;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
