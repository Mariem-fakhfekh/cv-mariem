function submitQuiz() {
    /*met quels sont  les reponses correctes */
    var answers = {
        question1: 'c',
        question2: 'c',
        question3: 'c',
        question4: 'b',
        question5: 'a',
        question6: 'a',
        question7: 'b',
        question8: 'a',
        question9: 'b',
        question10: 'b',
        question11: 'b',
        question12: 'b',
        question13: 'c',
        question14: 'a',
        question15: 'a'
    };

    var score = 0;
    /*avoir les reponses */
    var userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked'),
        question2: document.querySelector('input[name="question2"]:checked'),
        question3: document.querySelector('input[name="question3"]:checked'),
        question4: document.querySelector('input[name="question4"]:checked'),
        question5: document.querySelector('input[name="question5"]:checked'),
        question6: document.querySelector('input[name="question6"]:checked'),
        question7: document.querySelector('input[name="question7"]:checked'),
        question8: document.querySelector('input[name="question8"]:checked'),
        question9: document.querySelector('input[name="question9"]:checked'),
        question10: document.querySelector('input[name="question10"]:checked'),
        question11: document.querySelector('input[name="question11"]:checked'),
        question12: document.querySelector('input[name="question12"]:checked'),
        question13: document.querySelector('input[name="question13"]:checked'),
        question14: document.querySelector('input[name="question14"]:checked'),
        question15: document.querySelector('input[name="question15"]:checked')
    };
     // Vérification des réponses non répondues
     for (const question in answers) {
        if (!userAnswers[question]) {
            alert("Veuillez répondre à toutes les questions avant de soumettre le quiz.");
            return false; 
        }
    }
/*Si l'utilisateur a sélectionné une réponse ( yaani userAnswers[question] n'est pas null).*/
    for (var question in answers) {
        if (userAnswers[question] && userAnswers[question].value === answers[question]) {
            score++;
        }
    }
/*.innerText : Cela définit le texte à afficher dans cet élément. La syntaxe de modèle (template literal) est utilisée pour insérer les valeurs de score et le nombre total de questions.*/
    document.getElementById('result').innerText = `Votre score est ${score} sur ${Object.keys(answers).length}.`; /*pour calcul le nb total de question*/
    return false; // Empêche le rechargement de la page
}