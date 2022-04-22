import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< origin/mahmoud
import {QuestionService} from '../Service/question.service'
=======
import { QuestionService } from '../Service/question.service';
import { HotToastService } from '@ngneat/hot-toast';
>>>>>>> local
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  basicModalCloseResult: string = '';
  modelBtnContext: string = 'إضافة';
  indexOfEditItem: number;
  newQuestion = { "question": "", "answer": "" }
<<<<<<< origin/mahmoud
  constructor(private modalService: NgbModal , private _questionService:QuestionService ) {
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wva3JvbWJvLjAwMHdlYmhvc3RhcHAuY29tXC9hcGlcL2FkbWluXC9sb2dpbiIsImlhdCI6MTY0ODI0NDM4NiwibmJmIjoxNjQ4MjQ0Mzg2LCJqdGkiOiJPN0ZuTFBwZzN0S09lVDhwIiwic3ViIjoxLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.O3cTvFJzduKmuSbrqIr6uGPl1lQFEoyokDGPnQZKR6o')
    this.getQuestion();
  }
  
  openBasicModal(content: TemplateRef<any>) {
    this.newQuestion = {
      "question": '',
      "answer": '',
    }
    this.modelBtnContext = 'إضافة';
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => { });
  }
  // get Question
  getQuestion(){
    this._questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data
    })
  }
  // add Question
  addFaq(Questionfrom: any) {
    let { Question, questionAnswer } = Questionfrom.value;
    if (this.modelBtnContext == 'إضافة') {
      let newQuestion = {
        "question": Question,
        "answer": questionAnswer,
      }
      this._questionService.addQuestion(newQuestion).subscribe((response) => {
        console.log(response)
        this.getQuestion();
      })

    }
    else {
      this.faqs[this.indexOfEditItem].question = Question;
      this.faqs[this.indexOfEditItem].answer = questionAnswer;
    }

    this.modalService.dismissAll('Reason');
    this.newQuestion = {
      "question": '',
      "answer": '',
    }
  }
  editFaq(index: any, content: TemplateRef<any>) {
    this.indexOfEditItem = index;
    this.newQuestion = {
      "question": this.faqs[index].question,
      "answer": this.faqs[index].answer,
    }
    this.modelBtnContext = 'تعديل'
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => { });
  }
  deleteQuestion(number:number){
    this._questionService.deleteQuestion(number).subscribe();
    this._questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data
      console.log(response.data.data)
    })
  }
=======
>>>>>>> local
  faqs = [
    {
      "id": 1,
      "question": "",
      "answer": ""
    }
  ]
<<<<<<< origin/mahmoud
=======
  constructor(private modalService: NgbModal, private _questionService: QuestionService, private toastService: HotToastService) {
    _questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data
      console.log(this.faqs)
    })
  }
>>>>>>> local

  openBasicModal(content: TemplateRef<any>) {
    this.newQuestion = {
      "question": '',
      "answer": '',
    }
    this.modelBtnContext = 'إضافة';
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => { });
  }
  /*
    ========================================
    ---------------Get Question----------
    ========================================
  */
  getQuestion() {
    this._questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data
    })
  }
  /*
    ========================================
    ---------------Add Question-------------
    ========================================
  */
  addFaq(Questionfrom: any) {
    let { Question, questionAnswer } = Questionfrom.value;
    if (this.modelBtnContext == 'إضافة') {
      this._questionService.addQuestion(questionAnswer, Question).subscribe((response) => {
        if(response.error){
          this.toastService.error(response.error.question[0])
        }
        else
        {
          this.toastService.success(response.message)
        }
        this.getQuestion();
      })
    }
    else {
      this._questionService.updateQuestion(this.indexOfEditItem, questionAnswer, Question).subscribe(
        (response) => {
          if(response.error){
            this.toastService.error(response.error.question[0])
          }
          else
          {
            this.toastService.success(response.message)
          }
          this.getQuestion();
        })
    }
    this.modalService.dismissAll('Reason');
    this.newQuestion = {
      "question": '',
      "answer": '',
    }
  }
  /*
    ========================================
    ---------------Edit Question----------
    ========================================
  */
  editFaq(index: any, QuestionId: any, content: TemplateRef<any>) {
    this.indexOfEditItem = QuestionId;
    console.log(this.indexOfEditItem)
    this.newQuestion = {
      "question": this.faqs[index].question,
      "answer": this.faqs[index].answer,
    }
    this.modelBtnContext = 'تعديل'
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => { });
  }
  /*
    ========================================
    ---------------Delete Question----------
    ========================================
  */
  deleteQuestion(number: number) {
    this._questionService.deleteQuestion(number).subscribe();
    this._questionService.getQuestion().subscribe((response) => {
      if(response.error){
        this.toastService.error(response.error.question[0])
      }
      else
      {
        this.toastService.success("لقد تم حذف سؤال بنجاح")
      }
      this.getQuestion();
    })

  }
  /*
    ========================================
    ---------------Show Toast---------------
    ========================================
  */
  showToast(message: string) {
    this.toastService.success(message)
  }
  ngOnInit(): void {
  }

}
