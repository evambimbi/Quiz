let etape = 0
let width = 100;
let i = 0

let interval
const titre = document.getElementById('titre')
const soustitre = document.getElementById('soustitre')
const progress = document.getElementById('progression')
const inputgroup = document.getElementById('input-group')
const buttons = document.getElementById('buttons')
const reussiGroug= document.getElementById('reussi-groug')
const echecGroug = document.getElementById('echec-groug')

let initialScore={
  name: '',
  email: '',
  un: 0,
  deux: 0,
  trois:0,
  quatre: 0,
  cinq: 0,
  six:0,
  sept: 0,
  huit: 0,
  neuf:0,
  dix: 0,
  onze: 0,
  douze: 0,
  treize: 0,
  quatorze: 0,
  quinze: 0,
}

const handleInputChange = (event) => {
  const {name,value} = event.target
  initialScore = { ...initialScore, [name]: value }
  subrillanceQuestion(event)
}
// Tableau des formulaires
const formsGroup = [
    {
        titre: 'Javascript Quiz',
        sousTitre: "Évaluez vos connaissances en javascript en repondant aux questions que nous avons spécialement sélectionnées pour vous. c'est fun et c'est gratuit.",
        progress:``,
        inputs:[
           `<div class="form-control" > <div class="username">
          <label>Nom</label>
        </div>
        <div class="enter">
          <input type="text" id="nom" required name="name" onkeydown="initializeErrorMessage(event)" onchange="handleInputChange(event);"placeholder="Eveline" />
          <small id="error"></small>
        </div></div>`,
         `<div class="email">
            <label>E-mail</label>
          </div> 
          <div class="autre">
          <input
            type="email"
            required
            id="email" name="email" 
            placeholder="evelinembimbi@gmail.com"
            onchange="handleInputChange(event)"
            onkeydown="initializeErrorMessage(event)"
          />
          <small id="emailerror"></small>
        </div>`,

        ],
        boutons:[`<div class="button"><button type="button" onclick="commencer()" id="btnSubmit">Commencer</button></div>`]
    },
     {
        titre: '',
        sousTitre: `Dans quel élément HTML devons-nous placer le JavaScript ?`,
        progress:`
                 <div class="quetion"> 
                 <div class="qst">Question 1/15</div>
                  <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio" id="pointe" name="un" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe" class="option"> "script"</span>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="un" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "scripting "</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" onchange="handleInputChange(event)" name="un"value="0" />
            <label for="pointe2" class="option"> "js"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="un" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"javasript" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit" disabled="disabled" onclick="nextStep()"  id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Quel est le bon endroit pour insérer un JavaScript ?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 2/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="deux" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe" class="option">"head"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="deux" onchange="handleInputChange(event)"  value="1"/>
            <label for="point12" class="option"> "head et body"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="deux" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "body"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="deux" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"aucune de reponse" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Quelle est la syntaxe correcte pour faire référence à un script externe appelé xxx.js?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 3/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="trois" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe" class="option"> "script href=..."</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="trois" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe1" class="option"> "script src=... "</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="trois" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "script=..."</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="trois" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"script name=..." </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment écrire "Hello World" dans une boîte d'alerte ?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 4/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="quatre" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe" class="option"> "msgBox("hello word")"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="quatre" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe1" class="option"> "alert("hello word")"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="quatre" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "msg("hello word")"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="quatre" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"alertBox("hello word")" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Le fichier JavaScript externe doit contenir la balise <script>.?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 5/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="cinq" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe" class="option"> "vrai'"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="cinq" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe1" class="option"> "faux"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="cinq" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "tout est correct"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="cinq" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"aucune de reponse" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment créer une fonction en JavaScript?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 6/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="six" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe" class="option"> "function myFun()"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="six" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe1" class="option"> "function=myFunc"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="six" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "function:myFunc()"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="six" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"function = ()" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `A quoi sert le mot-clé « this » en JavaScript?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 7/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="sept" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe" class="option"> "fait référence a rien"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="sept" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe1" class="option"> "declare une function"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="sept" onchange="handleInputChange(event)"  value="0" />
            <label for="pointe2" class="option"> "tout est correct"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="sept" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe3" class="option">"fait référence à l’objet actuelle" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `En javascript, un objet est declare comme une liste de paire cle/valeur entre...`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 8/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="huit" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe" class="option"> "accolades"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="huit" onchange="handleInputChange(event)"  value="1"/>
            <label for="pointe1" class="option"> "crocher"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="huit" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe2" class="option"> "parentheses"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="huit" onchange="handleInputChange(event)"  value="0"/>
            <label for="pointe3" class="option">"aucune de reponse" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `On declare un array comme une liste d'element, separes par des virgules entre...`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 9/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="neuf" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe" class="option"> "accolades"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="neuf" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "crochets"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="neuf" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe2" class="option"> "paretheses"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="neuf" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"aucune de reponse" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment écrire une instruction IF en JavaScript ?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 10/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="dix" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe" class="option"> "if(i==5)"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="dix" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "if i=5 then"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="dix" onchange="handleInputChange(event)" value="0" />
            <label for="pointe2" class="option"> "if i=5"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="dix" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"if i==5 then" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment ajouter un commentaire en JavaScript ?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 11/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="onze" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe" class="option"> "//commentaire"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="onze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "--commentaire"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="onze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe2" class="option"> "!--commentaire"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="onze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"* commentaire" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment faire appelle à une fonction nommée « sum »?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 12/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="douze" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe" class="option"> "sum()"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="douze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "call function sum()"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="douze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe2" class="option"> "call sum()"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="douze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"aucune de reponse" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Quelle entreprise a devéloppé javascript?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 13/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="treize" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe" class="option"> "Appl"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="treize" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "Microsoft"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="treize" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe2" class="option"> "Google"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="treize" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe3" class="option">"Netscape" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 14/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="quatorze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe" class="option"> "if a <> 2"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="quatorze" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe1" class="option"> "if (a != 2)"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="quatorze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe2" class="option"> "if a =! 2 then"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="quatorze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"if (a <> 2)" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="quitter()" id="btnQuite">Quitter</button>`,
        ` <button type="submit"disabled="disabled" onclick="nextStep()" id="btnSuivant">Suivant</button></div>`]
    },
    {
        titre: '',
        sousTitre: `Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?`,
        progress:`
                 <div class="quetion"> <div class="qst">Question 15/15</div> <div class="temps"></div>
                 </div>
        <div id="progress-bar" >
          <p class="progres"></p>
        </div>`,
        inputs:[
           `<div class="questionA">
            <input type="radio"  id="pointe" name="quinze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe" class="option"> "if (c == "XYZ")then{ }else{ }"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe1" name="quinze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe1" class="option"> "if (c = "XYZ")then{ }else{ }"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe2" name="quinze" onchange="handleInputChange(event)" value="1"/>
            <label for="pointe2" class="option"> "if (c == "XYZ"){ }else{ }"</label>
          </div>`,
          `<div class="questionB">
            <input type="radio"  id="pointe3" name="quinze" onchange="handleInputChange(event)" value="0"/>
            <label for="pointe3" class="option">"if (c = "XYZ"){ }else{ }" </label>
          </div>`,

        ],
        boutons:[`<div class="button2"><button type="submit" onclick="reviousStep()" id="btnQuite">Quitter</button>`,
        ` <button type="submit" disabled="disabled" onclick="showScore()" id="btnSuivant">Terminer</button></div>`]
    },
     {
        titre: '',
        sousTitre: ``,
        progress:``,
        inputs:[],
        boutons:[`<div class="button3"><button type="submit" onclick="reviousStep()" id="btnAcl">Accueil</button></div>`]
    },
    
]

//reinitialisation de chaque etapes

const initialiser = () => {
     titre.innerText=''
    soustitre.innerHTML=''
    progress.innerHTML=''
    inputgroup.innerHTML=  ''
    buttons.innerHTML=  ''
}


const getScore=(values)=> {
  let scoreLabel={
    name: '',
    email: '',
    value: 0,
    base:Object.values(values).length - 2
  }
Object.values(values).map((item,index)=> {
  
if(index === 0) {
  scoreLabel={...scoreLabel,name: item}
}else if(index ===1){
    scoreLabel={...scoreLabel,email: item}
}else{
    scoreLabel={...scoreLabel,value: scoreLabel.value + parseInt(item) }
}

})
return scoreLabel
}

//la creations de diferentes etapes

const createForm = (stape) =>{
    initialiser()
    const form = formsGroup[stape]
    titre.innerText = form.titre
    soustitre.innerText=form.sousTitre
    progress.innerHTML=form.progress
    inputgroup.innerHTML=  form.inputs.join('')
    buttons.innerHTML = form.boutons.join('')

}

//pour passer a l'etape suivante
const nextStep = () => {


    if (etape <= formsGroup.length){
        etape = etape + 1
      createForm(etape)
      
      decrementTime()
    }
    
}
//pour passer a une pagea l'autre
const previousStep = ()=>{
    if (etape > 0){
        etape = etape - 1
        createForm(etape)
    }
    
}
if (etape == 0){
  createForm(etape)
   
}

const showScore =()=>{
 
createForm(formsGroup.length-1)
  const score = getScore(initialScore)
  reussiGroug.innerHTML = ""
  echecGroug.innerHTML = ""
  if (score.value > (score.base / 2)) {
    const child = `
    <div class="score-name">${score.name}</div>
    <div class="score-email">${score.email}</div>
    <div class="check-green">
      <i class="fa-regular fa-circle-check fa-7x"></i>
    </div>
    <div class="finally-score">${score.value}/${score.base}</div>
    `
    reussiGroug.innerHTML=child
  }else{
     const child = `
    <div class="score-name">${score.name}</div>
    <div class="score-email">${score.email}</div>
     <div class="xmark-red">
      <i class="fa-regular fa-circle-xmark fa-7x"></i>
     </div>
    <div class="finally-score">${score.value}/${score.base}</div>
    `
    echecGroug.innerHTML=child
  }
}
const quitter=()=>{
 showScore()
}
// Initalisation des messages d'erreurs
function initializeErrorMessage(event) {

  switch (event.target.name) {
    case 'name':
      document.getElementById('error').innerText = ''
      document.getElementById('nom').style.border = ''
      break;
    case 'email':
      document.getElementById('emailerror').innerText = ''
      document.getElementById('email').style.border = ''
      break;
    default:
      break;
  }
  
}
function subrillanceQuestion(event) { 
  const btnSuivant = document.getElementById('btnSuivant')
  btnSuivant.disabled = true;
  const options = document.querySelectorAll('input[type="radio"')
  if (options.length > 0) {
    options.forEach(element => {
      element.parentNode.style.border = ''
      btnSuivant.disabled = true;
    });

    event.target.parentNode.style.border = '1px solid rgba(2, 138, 61, 1)'
    /*clearInterval(interval)*/
    if (btnSuivant) {
       btnSuivant.style.background = '#028A3D';
       btnSuivant.disabled = false;
    }
  }
}
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Commencer le Quiz
const commencer = () => {
  const { name, email } = initialScore
  //Validation du NOM
  if (name === '') {
    document.getElementById('error').innerText = 'Renseigner le nom'
    document.getElementById('nom').style.border = '1px solid #FF3838'
    return;
  }
  if (name.length < 2) {
    document.getElementById('error').innerText = 'Renseigner un nom d’au moins deux caractères'
    document.getElementById('nom').style.border = '1px solid #FF3838'
    return;
  }
  // Validation de l'Email
  if (email === '') {
    document.getElementById('emailerror').innerText = 'Renseigner votre adresse Email'
    document.getElementById('email').style.border = '1px solid #FF3838'
    return;
  }
  if (!checkEmail(email)) {
    document.getElementById('emailerror').innerText = 'Renseigner une adresse email valide'
    document.getElementById('email').style.border = '1px solid #FF3838'
    return;
  }
  nextStep()
}
function decrementTime() {
   clearInterval(interval)
  const temps = document.querySelector(".temps")
  const progress = document.querySelector("#progress-bar .progres")
  if (temps && progress) {
     let joge = 100
    temps.innerText = ""
    progress.style.width = joge +"%"
    let time = 60
     joge = 100
  interval = setInterval(() => {
    temps.innerText = time;
    progress.style.width = time>=1 ? joge +"%": "0%"
    time = time - 1
    joge = joge - (10/6)
   if (time < 0) {
      clearInterval(interval)
      nextStep()
    }
   },1000)
  }
}






