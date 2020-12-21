import './play.html'
import './play.less'

question = new ReactiveVar({
    index: 0
})

Template.playQuiz.onRendered(function playOnRendered() {
    $('.collapsible').collapsible();
    $('.collapsible').collapsible('open', question.get().index);    
})

Template.playQuiz.helpers({ 
    question() {
        return question.get()
    }
}); 

Template.playQuiz.events({ 
    'click .question-button'(e) {
        e.preventDefault()
        question.get().index += 1 
        $('.collapsible').collapsible('open', question.get().index);    
    }
}); 
