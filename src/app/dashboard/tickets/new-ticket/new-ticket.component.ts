import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('newTicketForm') newTicketForm?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, text: string) {
    console.log("Submitted!");
    console.log('Entered title ' + title);
    console.log("Text");
    this.newTicketForm?.nativeElement.reset();
  }

}
