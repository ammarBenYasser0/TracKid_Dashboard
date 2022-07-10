import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from '../Service/question.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  basicModalCloseResult: string = '';
  modelBtnContext: string = 'إضافة';
  indexOfEditItem: number;
  newQuestion = { question: '', answer: '' };
  faqs: any = [
    // {
    //   "id": 1,
    //   "question": "",
    //   "answer": ""
    // }
  ];
  questionId: number;
  isLoading = false;
  isEditing = false;
  constructor(
    private modalService: NgbModal,
    private _questionService: QuestionService,
    private toastService: HotToastService
  ) {
    this.isLoading = true;

    _questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data;
      this.isLoading = false;
    });
  }

  openBasicModal(content: TemplateRef<any>) {
    this.newQuestion = {
      question: '',
      answer: '',
    };
    this.modelBtnContext = 'إضافة';
    this.modalService
      .open(content, {})
      .result.then((result) => {
        this.basicModalCloseResult = 'Modal closed' + result;
      })
      .catch((res) => {});
    this.isEditing = false;
  }
  openDeleteModal(content: TemplateRef<any>, questionId: any) {
    this.questionId = questionId;
    this.modalService
      .open(content, {})
      .result.then((result) => {
        this.basicModalCloseResult = 'Modal closed' + result;
        this.isEditing = false;
      })
      .catch((res) => {});
  }
  /*
    ========================================
    ---------------Get Question----------
    ========================================
  */
  getQuestion() {
    this._questionService.getQuestion().subscribe((response) => {
      this.faqs = response.data.data;
    });
  }
  /*
    ========================================
    ---------------Add Question-------------
    ========================================
  */
  addFaq(Questionfrom: any) {
    let { Question, questionAnswer } = Questionfrom.value;
    if (this.modelBtnContext == 'إضافة') {
      this._questionService
        .addQuestion(questionAnswer, Question)
        .subscribe((response) => {
          if (response.error.answer) {
            this.toastService.error('الرجاء قم بإدخال الإجابة');
          } else if (response.error.question) {
            this.toastService.error('الرجاء قم بإدخال السؤال');
          } else {
            this.toastService.success('تمت إضافة السؤال بنجاح');
          }
          this.getQuestion();
        });
    } else {
      this._questionService
        .updateQuestion(this.indexOfEditItem, questionAnswer, Question)
        .subscribe((response) => {
          if (response.error) {
            this.toastService.error(response.error.question[0]);
          } else {
            this.toastService.success('تم تعديل السؤال بنجاح');
          }
          this.getQuestion();
          // this.isEditing=false;
        });
    }
    this.modalService.dismissAll('Reason');
    this.isEditing = false;
    this.newQuestion = {
      question: '',
      answer: '',
    };
  }

  /*
    ========================================
    ---------------Edit Question----------
    ========================================
  */
  editFaq(index: any, QuestionId: any, content: TemplateRef<any>) {
    this.isEditing = true;
    this.indexOfEditItem = QuestionId;
    this.newQuestion = {
      question: this.faqs[index].question,
      answer: this.faqs[index].answer,
    };
    this.modelBtnContext = 'تعديل';
    this.modalService
      .open(content, {})
      .result.then((result) => {
        this.basicModalCloseResult = 'Modal closed' + result;
      })
      .catch((res) => {});
  }
  /*
    ========================================
    ---------------Delete Question----------
    ========================================
  */
  deleteQuestion() {
    this._questionService.deleteQuestion(this.questionId).subscribe();
    this._questionService.getQuestion().subscribe((response) => {
      if (response.error) {
        this.toastService.error(response.error.question[0]);
      } else {
        this.toastService.success('لقد تم حذف سؤال بنجاح');
      }
      this.getQuestion();
      this.modalService.dismissAll('Reason');
    });
  }
  /*
    ========================================
    ---------------Show Toast---------------
    ========================================
  */
  showToast(message: string) {
    this.toastService.success(message);
  }
  ngOnInit(): void {}
}
