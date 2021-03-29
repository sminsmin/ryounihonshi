
//問題と解答

qa = new Array();
qa[1] = ["","","","",1];
qa[2] = ["","","","",1];
qa[3] = ["","","","",1];
qa[4] = ["","","","",1];
qa[5] = ["","","","",1];
qa[6] = ["","","","",1];
qa[7] = ["","","","",2];
qa[8] = ["","","","",2];
qa[9] = ["","","","",2];
qa[10] = ["","","","",2];
qa[11] = ["","","","",3];
qa[12] = ["","","","",3];
qa[13] = ["","","","",3];
qa[14] = ["","","","",3];
qa[15] = ["","","","",3];
qa[16] = ["","","","",3];
qa[17] = ["","","","",1];
qa[18] = ["","","","",2];





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
		for (let n=0; n < 10; n++) {
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