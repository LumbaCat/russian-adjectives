class Mot {
  constructor(fr, ru) {
  	this.fr = fr;
	this.ru = ru;
	
  }
}

var sections = new Array(6);
for (var i = 0; i < 6; i++)
{
	sections[i] = new Array();
}


function construireListes(){
	sections[0].push(new Mot("agréable","приятный"));
sections[0].push(new Mot("aimable","любезен"));
sections[0].push(new Mot("beau","Красивый"));
sections[0].push(new Mot("c'est correct","это правильно"));
sections[0].push(new Mot("célèbre","известный"));
sections[0].push(new Mot("chaud","Жарко, горячий"));
sections[0].push(new Mot("confortable","удобный"));
sections[0].push(new Mot("connu","знакомый"));
sections[0].push(new Mot("de trop","лишний"));
sections[0].push(new Mot("dernier","последний"));
sections[0].push(new Mot("ennuyant","скучный"));
sections[0].push(new Mot("Excellent","Oтлично"));
sections[1].push(new Mot("faible","слабый"));
sections[1].push(new Mot("fainéant","ленивый"));
sections[1].push(new Mot("fort","сильный"));
sections[1].push(new Mot("froid","холодно"));
sections[1].push(new Mot("génial","здорово"));
sections[1].push(new Mot("important","важный"));
sections[1].push(new Mot("incroyable","удивительно"));
sections[1].push(new Mot("je suis contre","Я против"));
sections[1].push(new Mot("je suis pour","Я за"));
sections[1].push(new Mot("je suis sûr","Я уверен"));
sections[1].push(new Mot("juste","верно"));
sections[1].push(new Mot("le même","такой же"));
sections[2].push(new Mot("léger","лёгкий"));
sections[2].push(new Mot("libre","свободный"));
sections[2].push(new Mot("loin","далеко"));
sections[2].push(new Mot("lourd","тяжелый"));
sections[2].push(new Mot("mauvais","плохой"));
sections[2].push(new Mot("mignon","миловидный"));
sections[2].push(new Mot("occupé","занятый"));
sections[2].push(new Mot("pas mal","Heплoxо"));
sections[2].push(new Mot("pauvre","бедные"));
sections[2].push(new Mot("personne intelligente","умница"));
sections[2].push(new Mot("plein","полный"));
sections[2].push(new Mot("ponctuel","точны"));
sections[3].push(new Mot("possible","возможно"));
sections[3].push(new Mot("premier","первый"));
sections[3].push(new Mot("préoccupé","озабоченный"));
sections[3].push(new Mot("prêt","готов"));
sections[3].push(new Mot("principal","основной"));
sections[3].push(new Mot("prochain","следующий"));
sections[3].push(new Mot("satisfait","доволен"));
sections[3].push(new Mot("suivant","следующий"));
sections[3].push(new Mot("super","молодец"));
sections[3].push(new Mot("terrible","страшный"));
sections[3].push(new Mot("tranquille","Спокойный"));
sections[3].push(new Mot("vide","пустой"));
sections[4].push(new Mot("bienvenu","с приездом"));
sections[4].push(new Mot("brûlant","горячий"));
sections[4].push(new Mot("Comme ci, comme ça","Hичего/Так себе"));
sections[4].push(new Mot("cool","прохладный"));
sections[4].push(new Mot("d'accord","согласен"));
sections[4].push(new Mot("génial","замечательный"));
sections[4].push(new Mot("heureux","счастливый"));
sections[4].push(new Mot("impressionnant","впечатляющий"));
sections[4].push(new Mot("inconnu","незнакомый"));
sections[4].push(new Mot("je connais","мне знакома"));
sections[4].push(new Mot("malade","больные"));
sections[4].push(new Mot("mieux","лучше"));
sections[5].push(new Mot("mignonne","миловидная"));
sections[5].push(new Mot("pareil","такой же"));
sections[5].push(new Mot("pas loin","Недалекo"));
sections[5].push(new Mot("précédent","предыдущий"));
sections[5].push(new Mot("splendide","великолепен"));
sections[5].push(new Mot("essentiel","главный"));
sections[5].push(new Mot("fatigué","устал"));
sections[5].push(new Mot("frais","свежий"));
sections[5].push(new Mot("horrible","ужасный"));
sections[5].push(new Mot("intelligent","умный"));
sections[5].push(new Mot("je ne suis pas contre","Я не против"));
sections[5].push(new Mot("merveilleux","чудесный"));
	
}

construireListes()



//afficher(mots);
var ops = new Array(sections.length);
var opInner = ["section 1", "section 2", "section 3",
				"section 4", "section 5", "section 6"];            

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Français", "Russe"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}



function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }

function condition(tableau){
	var result = 1;
	for(var i=0; i<tableau.length; i++){
		for(var j=0; j<tableau.length; j++){
			if(i != j){
				if(tableau[i] == tableau[j]){
					result = 0;
				}
			}	
		}
	}
	return result;
}

var ks = new Array();
function unicite(k, ks){
	var retour = 0;
	var indic = 0;
	for (var i = 0; i<ks.length; i++){
		if (k == ks[i]){
			indic++;
		}
	}
	if(indic > 0){
		retour = 1;
	}
	return retour;
}

var marche = 0
function commencer(){
	if (marche == 0){
		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		

		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

		// empêcher de rajouter des radiobox
		marche = 1;
	}else{
		var start = document.getElementById("start");
		var suppr = document.getElementById("coeur");
		start.removeChild(suppr); 

		// ajout <coeur>
		var coeur = document.createElement("ul");
		coeur.setAttribute("id", "coeur");
		document.getElementById("start").appendChild(coeur);

		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

	}
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Selectionnez la bonne traduction et changez de section après 20 bonnes réponses.</i>";

	document.getElementById('sol').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('reponse').innerHTML = "";
	document.getElementById('points').innerHTML = 0;
	document.getElementById('tour').innerHTML = 0;

	commencer();
}


function radioboxes(section, mode, k){

	// récupération mot
	var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;

	// 5 nb aleatoires entre 1 et 5
	var radioValue = new Array(5);

	//defini la place de la trad correcte
	var bonneRep = nbAlea(0, 4);
	radioValue[bonneRep] = k;
	
	do{
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				radioValue[i] = nbAlea(0, sections[section].length-1);
			}
		}
		
	}while (condition(radioValue) == 0);
		// ajout <radio>
		var radios = new Array(5);
		var radioId = ["a", "b", "c", "d", "e"];  
		var radioLabel = new Array(5); 

		for(var i=0; i<radioLabel.length; i++){
			radioLabel[i] = (mode == 1)?  sections[section][radioValue[i]].ru : sections[section][radioValue[i]].fr;
		}


		
		var divs = new Array(5);

		for (var i=0; i<radios.length; i++){
			radios[i] = document.createElement("button");
			radios[i].setAttribute("class", "styled");
			radios[i].setAttribute("onclick", "verifier(this.id)");

			radios[i].setAttribute("id", radioId[i]);
			radios[i].setAttribute("value", radioValue[i]);
			radios[i].setAttribute("name", "selection");

			
			radios[i].innerHTML  = radioLabel[i];

			divs[i] = document.createElement("div");
			divs[i].setAttribute("class", "formu");
			divs[i].appendChild(radios[i]);
			

			document.getElementById("coeur").appendChild(divs[i]);
		}

		// ajout <button>
		arreter= document.createElement("button");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		document.getElementById("coeur").appendChild(arreter);

}


function verifier(id) {
		var bouton = document.getElementById(id);
		var tour = document.getElementById('tour').innerHTML;
		var points = document.getElementById('points').innerHTML;
		var k = document.getElementById('reponse').innerHTML;
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var valeur = bouton.value;
		
		var motFr = sections[section][k].fr;
		var motRu = sections[section][k].ru;

		tour++;
		document.getElementById('tour').innerHTML = tour;
		document.getElementById('sol').innerHTML = (mode == 1)? `${motFr} = ${motRu}.` : `${motRu} = ${motFr}.`;
		if(k == valeur){
			document.getElementById('sol').setAttribute("class", "vert");
			points++;
			document.getElementById('points').innerHTML = points;
		}else{
			document.getElementById('sol').setAttribute("class", "rouge");
		}
		document.getElementById('score').innerHTML = `${points} / ${tour} essais`;

		if(points > 19){
			if(points == tour){
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Félicitation! Vous avez le<br>score parfait!`;
			}else{
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Bravo! Votre score est <br>supérieur à 20.`;
			}
		}
		
		commencer();
}

var voir = 0;
function voirMots(){
	if(voir%2 == 0){
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var tableauFr = new Array(sections[section].length+1);
		var tableauRu = new Array(sections[section].length+1);

		tableauFr[0]="Français";
		tableauRu[0]="Russe";
		for(var i=1; i<sections[section].length+1; i++){
			tableauFr[i]=sections[section][i-1].fr;
			tableauRu[i]=sections[section][i-1].ru;
		}
		
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		for (var i = 0; i<sections[section].length+1; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			construireTab();
			
			tr.appendChild(td1);
			
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		document.getElementById("table").appendChild(table);

		var v = document.getElementById("voir");
		v.innerHTML = "Cacher";

	}else{
		var tb = document.getElementById("tb");
		document.getElementById("table").removeChild(tb);

		var v = document.getElementById("voir");
		v.innerHTML = "Voir mots";
	}
	voir++;

	function construireTab() {
		if (i == 0) {
			if (mode == 1) {
				td1.innerHTML = tableauFr[i];
				td1.setAttribute("class", "francaisTitre");
				td2.innerHTML = tableauRu[i];
				td2.setAttribute("class", "russeTitre");
			}
			else {
				td1.innerHTML = tableauRu[i];
				td1.setAttribute("class", "russeTitre");
				td2.innerHTML = tableauFr[i];
				td2.setAttribute("class", "francaisTitre");
			}
		}
		else if (mode == 1) {
			td1.innerHTML = tableauFr[i];
			td1.setAttribute("class", "francais");
			td2.innerHTML = tableauRu[i];
			td2.setAttribute("class", "russe");
		}
		else {
			td1.innerHTML = tableauRu[i];
			td1.setAttribute("class", "russe");
			td2.innerHTML = tableauFr[i];
			td2.setAttribute("class", "francais");
		}
	}
}





