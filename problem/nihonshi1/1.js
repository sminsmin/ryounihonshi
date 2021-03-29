
//問題と解答

qa = new Array();
qa[1] = ["今から数万年前、地質年代でいう（　　）世の終わり頃は海水面は低く、日本列島は地続きだった。","更新世","中新世","氷河期",1];
qa[2] = ["沖縄県で発見された化石人骨は（　　）である。","浜北人骨","山下人骨","柳江人骨",1];
qa[3] = ["旧石器文化では（　　）が用いられた","打製石器","磨製石器","正解なし",1];
qa[4] = ["群馬県の（　　）から打製石器が発見され日本の旧石器時代の存在が証明された。","岩宿遺跡","加茂岩倉遺跡","野尻湖",1];
qa[5] = ["日本列島の気候が温暖になったのは（　　）である","中新世","完新世","氷河期",2];
qa[6] = ["縄文時代の人々は台地などに（　　）をたて、集落を営んだ","竪穴住居","環濠集落","環状集落",1];
qa[7] = ["アメリカ人のモースが１８７７年に見つけた貝塚はどこか","鳥浜貝塚","大森貝塚","弥生貝塚",2];
qa[8] = ["ガラスのような石材で、北海道の十勝岳などで産出されるのは何か","サヌカイト","黒曜石","ひすい",2];
qa[9] = ["あらゆる自然物や自然現象に脅威を認める考え方を（　　）という。","古文化主義","アニミズム","正解なし",2];
qa[10] = ["縄文時代に女性を象ったものは何か","石棒","土偶","サヌカイト",2];
qa[11] = ["弥生文化が形成された当時、北海道では（　　）文化が形成された","貝塚文化","縄文文化","続縄文文化",3];
qa[12] = ["福岡県にある縄文時代後期の遺跡は何か","菜畑遺跡","加茂岩倉遺跡","板付遺跡",3];
qa[13] = ["１９４３年に発見された水田跡のある遺跡はどこ","菜畑遺跡","大塚遺跡","登呂遺跡",3];
qa[14] = ["弥生時代前期の近畿地方に出現した平地の区画墓を（　　）という","箱式石棺墓","墳丘墓","方形周溝墓",3];
qa[15] = ["弥生時代の埋葬方法は（　　）である","屈葬","伸展葬","正解なし",2];
qa[16] = ["弥生時代に銅鐸はどこに分布したか","九州","関東","近畿地方",3];
qa[17] = ["岩宿遺跡から打製石器を発見した人物は誰か","相沢忠洋","モース","ナウマン",1];
qa[18] = ["ナウマンゾウの骨が発掘された場所はどこか","岩宿遺跡","野尻湖","鳥浜遺跡",2];






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