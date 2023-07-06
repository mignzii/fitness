import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-choisirprogramme',
  templateUrl: './choisirprogramme.component.html',
  styleUrls: ['./choisirprogramme.component.css'],
  standalone:true,
  imports: [MatCardModule, MatButtonModule],
})
export class ChoisirprogrammeComponent {
choisir(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
}
}
