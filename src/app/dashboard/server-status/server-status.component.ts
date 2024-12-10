import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus: 'online'|'offline'|'unknown' = 'offline';
 private destroyRef = inject(DestroyRef);

  constructor(){}  // mantener el constructor tan limpio como sea posible
  
  ngOnInit(){
    console.log('ON INIT');
    const interval = setInterval(()=>{
      const rnd = Math.random();
      if (rnd < 0.5){
        this.currentStatus='online';
      }else if (rnd < 0.9){
        this.currentStatus='online';
      }else {
        this.currentStatus='unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })
  }
  ngAfterViewInit(){        //not available in older Angular
    console.log('AFTER VIEW INIT');
  }
  
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
