//問題と解答

qa = new Array();
qa[1] = ["大友金村は（　）天皇を擁立した","継体天皇","天智天皇","天武天皇",1];
qa[2] = ["５２７年に新羅と結んで反乱を起こしたのは（　）である","磐井","筑紫","大友金村",1];
qa[3] = ["仏教の受容をめぐって、崇仏派についたのは何氏か","蘇我氏","物部氏","大友氏",1];
qa[4] = ["蘇我馬子は仏教をめぐって５８７年に（　）を滅した。","物部守屋","蘇我入鹿","推古天皇",1];
qa[5] = ["推古天皇の頃に権力をふるっていたのは（　）である。","物部守屋","蘇我入鹿","蘇我蝦夷",2];
qa[6] = ["聖徳太子が記した本でないのはどれか","天皇記","日本書紀","国記",2];
qa[7] = ["遣隋使の記述があるのはどの本か","天皇記","日本書紀","国記",2];
qa[8] = ["初めての隋への派遣はいつか","６０１","６０７","６００",3];
qa[9] = ["６０７年に小野妹子を隋へ派遣した天皇は誰か","称徳天皇","継体天皇","推古天皇",3];
qa[10] = ["608年に煬帝が送った人物は誰か","高向玄理","犬上御田鍬","裴世清",3];
qa[11] = ["隋が統一された年","６０１","５９９","５８９",3];
qa[12] = ["蘇我馬子が５９２年に暗殺した人物は誰か","崇峻天皇","推古天皇","天智天皇",1];
qa[13] = ["憲法十七条はいつできたか","６０４","６０３","６０２",1];
qa[14] = ["614年に遣隋使に派遣されたのは誰か","小野妹子","犬上御田鍬","高向玄理",2;







//初期設定
q_sel = 3; //選択肢の数
q_max = 6; //出題数
qas = []; // 出題されたQA

setReady();

//初期設定
function setReady() {
	count = 0; //問題番号
	ansers = new Array(); //解答記録

	//最初の問題
	quiz();
}

//問題表示
function quiz() {
	var s, n;
	//問題
	rnd = Math.floor(Math.random() * qa.length);
	 //乱数
	document.getElementById("text_q").innerHTML = (count + 1) + "問目：" + qa[rnd][0];


	//選択肢
	s = "";
	for (n=1;n<=q_sel;n++) {
		if (qa[rnd][n] != "") {
			s += "<a href='javascript:anser(" + n + ")'><div class='btn-square-so-pop'>" + n + "：" + qa[rnd][n] + "</div></a>";
		}
	}
	document.getElementById("text_s").innerHTML = s;
}



//解答表示
function anser(num) {
	var s;
	s = (count + 1) + "問目：";
	//答え合わせ
  var q=qa[rnd];
  var ans=q[q_sel+1];
  var isCorrect=num==ans;
	ansers[count]=isCorrect?"〇":"✕";
	qas[count] = q;
	s+=ansers[count]+q[num];
  if(!isCorrect)s+="\n正解:"+q[ans];
  document.getElementById("text_a").innerText=s;
	//次の問題を表示
	count++;
	if (count < q_max) {
		quiz();
	} else {
		//終了
		s = "<div class='kekka'><table border='2'><caption>成績発表</caption></div>";
		//1行目
		s += "<tr><th>問題文</th><th>正しい答え</th><th>成否</th></tr>";

		//2行目以降
		for (let n=0; n < 6; n++) {
			s += "<tr>"
			// 問題文
			s += "<td>" + qas[n][0] + "</td>";
			// 正しい答え
			s += "<td>" + qas[n][qas[n][q_sel+1]] + "</td>";
			// 成否
			s += "<td>" + ansers[n] + "</td>";
			s += "</tr>";
		}
		s += "</table>";
		document.getElementById("text_q").innerHTML = s;
		//次の選択肢
		s = "<a href='javascript:setReady()'><div class='btn-square-so-pop'>もう一度やる！</div></a>";
		s += "<a href='javascript:history.back()'><div class='btn-square-so-pop'>教科を選択する！</div></a>";


		document.getElementById("text_s").innerHTML = s;
	}
}
