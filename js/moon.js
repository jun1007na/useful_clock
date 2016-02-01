$(function () {
    $.extend({
        moonAge: function moonAge() {
            var now = new Date(),
                year = now.getFullYear(),
                month = now.getMonth() + 1,
                date = now.getDate(),
                day = now.getDay(),
                age = 0;
            date = 25;

            var icon = new Array('wi-moon-new',
                'wi-moon-waxing-crescent-1',
                'wi-moon-waxing-crescent-2',
                'wi-moon-waxing-crescent-3',
                'wi-moon-waxing-crescent-4',
                'wi-moon-waxing-crescent-5',
                'wi-moon-waxing-crescent-6',
                'wi-moon-first-quarter',
                'wi-moon-waxing-gibbous-1',
                'wi-moon-waxing-gibbous-2',
                'wi-moon-waxing-gibbous-3',
                'wi-moon-waxing-gibbous-4',
                'wi-moon-waxing-gibbous-5',
                'wi-moon-waxing-gibbous-6',
                'wi-moon-full',
                'wi-moon-waning-gibbous-1',
                'wi-moon-waning-gibbous-2',
                'wi-moon-waning-gibbous-3',
                'wi-moon-waning-gibbous-4',
                'wi-moon-waning-gibbous-5',
                'wi-moon-waning-gibbous-6',
                'wi-moon-third-quarter',
                'wi-moon-waning-crescent-1',
                'wi-moon-waning-crescent-2',
                'wi-moon-waning-crescent-3',
                'wi-moon-waning-crescent-4',
                'wi-moon-waning-crescent-5',
                'wi-moon-waning-crescent-6');

            var fig_month = new Array('0', '2', '0', '2', '2', '4', '5', '6', '7', '8', '9', '10');

            age = (((year - 2009) % 19) * 11 + fig_month[month - 1] + date) % 30;

            $('.moon-icon').addClass(icon[age]);
            $('#moon-age').text(age);

            //1日ごとに更新
            setTimeout(function () {
                moonAge();
            }, 86400000);
        }
    });
    //現在日時を表示
    $.moonAge();
});
