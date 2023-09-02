import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  x: number = 0;
  showCard: boolean = false;

  age: number | undefined;
  sex: string | undefined;
  chestPain: number | undefined;
  restingBP: number | undefined;
  cholesterol: number | undefined;
  fastingSugar: number | undefined;
  ecgResults: number | undefined;
  maxHeartRate: number | undefined;
  exerciseAngina: string | undefined;
  stDepression: number | undefined;
  slopeSTSegment: number | undefined;
  numMajorVessels: number | undefined;
  thal: number | undefined;

  constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) { }


  onSubmit(formData: any) {
    this.showCard = true;
   

    this.age = formData.age;
    this.sex = formData.MaleFemale;
    this.chestPain = formData.chestPain;
    this.restingBP = formData.restingBP;
    this.cholesterol = formData.cholesterol;
    this.fastingSugar = formData.fastingSugar;
    this.ecgResults = formData.ecgResults;
    this.maxHeartRate = formData.maxHeartRate;
    this.exerciseAngina = formData.exerciseAngina;
    this.stDepression = formData.stDepression;
    this.slopeSTSegment = formData.slopeSTSegment;
    this.numMajorVessels = formData.numMajorVessels;
    this.thal = formData.thal;

    console.log('Form values:', {
      age: this.age,
      sex: this.sex,
      chestPain: this.chestPain,
      restingBP: this.restingBP,
      cholesterol: this.cholesterol,
      fastingSugar: this.fastingSugar,
      ecgResults: this.ecgResults,
      maxHeartRate: this.maxHeartRate,
      exerciseAngina: this.exerciseAngina,
      stDepression: this.stDepression,
      slopeSTSegment: this.slopeSTSegment,
      numMajorVessels: this.numMajorVessels,
      thal: this.thal
    })

    const sexValue = this.sex === 'female' ? 1 : 0;
    const exAngi = this.exerciseAngina === 'yes' ? 0 : 1;

    const input_data = [this.age, sexValue, this.chestPain, this.restingBP, this.cholesterol, this.fastingSugar, this.ecgResults, this.maxHeartRate, exAngi, this.stDepression, this.slopeSTSegment, this.numMajorVessels, this.thal];
    // const input_data = [57, 1, 2, 150, 168, 0, 1, 174, 0, 1.6, 2, 0, 2]
    const requestData = { data: input_data };

    console.log(requestData);

    setTimeout(() => {
      const scrollContainer = this.el.nativeElement.ownerDocument.documentElement;
      this.renderer.setProperty(scrollContainer, 'scrollTop', scrollContainer.scrollHeight);
    }, 100); // Adjust the delay as needed (e.g., 100 milliseconds)


    this.http.post<any>('http://127.0.0.1:5000/predict', requestData)
      .subscribe(
        response => {
          console.log('Response:', response);
          if (response.result) {
            console.log('Prediction:', response.result);
            if (response.result === "1") {
              this.x = 0
            }
            else {
              this.x = 1
            }
          }
        },
        error => {
          console.error('HTTP error:', error);
        }
      );
    


  }
}
