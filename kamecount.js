if (('localStorage' in window) && (window.localStorage !== null)) {
    var num = 0;



    function hantei1() {


        num = localStorage.getItem('access_count');
             num= window.localStorage.getItem('access_count');
              num = localStorage.access_count;
        　　 localStorage.setItem('access_count', num );
              window.localStorage.setItem  ('access_count', num);

        localStorage.access_count = Number(num) + 1;
        location.href = "kamemaru1.html";
    }

    function hantei2() {
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', Number(num));
        window.localStorage.setItem('access_count', Number(num));

        localStorage.access_count = Number(num) + 1;
        location.href = "kamemaru2.html";
    }

    function hantei3() {
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', num);
        window.localStorage.setItem('access_count', num);

        localStorage.access_count = Number(num) + 1;
        location.href = "kamemaru3.html";
    }

      function hantei4() {
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', num);
        window.localStorage.setItem('access_count', num);

        localStorage.access_count = Number(num) + 1;
        location.href = "kamemaru4.html";
    }

      function hantei5() {
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', num);
        window.localStorage.setItem('access_count', num);

        localStorage.access_count = Number(num) + 1;
        location.href = "kamemaru5.html";
    }


    function seikai() {
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
      
        // var sample = document.getElementById("sample"); この２行はいらない
        // sample.innerHTML = count;

        alert('あなたの正解数は' + num + '問です！');
        localStorage.setItem('access_count', num);
        num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        window.localStorage.setItem('access_count', num);
        localStorage.access_count = Number(num) + 0;
    }
    function modoru() {
            num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', num);
        window.localStorage.setItem('access_count', num);

        localStorage.access_count = 0;
        location.href = "index.html";

    }

          function kame1() {
            num = localStorage.getItem('access_count');
        num = window.localStorage.getItem('access_count');
        num = localStorage.access_count;
        localStorage.setItem('access_count', num);
        window.localStorage.setItem('access_count', num);

        localStorage.access_count = 0;
        location.href = "kame1.html";

    }
}
else {
    // 使えない。。。
    var sample = document.getElementById("sample");
    sample.innerHTML = "local storageは使えません";
}



// if (count == 3) {
//    alert('あなたの正解数は' + correctNum + '問です！');
//    count = 0;

//     }

//   if (document.getElementById("press-seikai").innerHTML) = not; {
//     correctNum++;
//   }

//   if (count == 3) {
//     alert('あなたの正解数は' + correctNum + '問です！');
//     }

