import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from '../Service/question.service';
import { HotToastService } from '@ngneat/hot-toast';
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
  faqs = [
    {
      "id": 1,
      "question": "",
      "answer": ""
    }
  ]
  constructor(private modalService: NgbModal, private _questionService: QuestionService, private toastService: HotToastService) {
    _questionService.getQuestion().subscribe((response) => {
      console.log(response)
      this.faqs = response.data.data
      console.log(this.faqs)
    })
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
