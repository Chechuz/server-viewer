import { AfterViewInit, Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus = signal< 'online'|'offline'|'unknown' >('offline') ;
 private destroyRef = inject(DestroyRef);

  constructor(){    // mantener el constructor tan limpio como sea posible
    effect(()=>{
      console.log(this.currentStatus());  // cada vez que cambie la señal lo actualiza (usar "effect()")
    });
    // effect((onCleanup) => {
    //   const tasks = getTasks();
    //   const timer = setTimeout(() => {
    //     console.log(`Current number of tasks: ${tasks().length}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }  
  
  ngOnInit(){
    console.log('ON INIT');
    const interval = setInterval(()=>{
      const rnd = Math.random();
      if (rnd < 0.5){
        this.currentStatus.set('online');
      }else if (rnd < 0.9){
        this.currentStatus.set('offline');
      }else {
        this.currentStatus.set('unknown');
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
function getTasks() {
  throw new Error('Function not implemented.');
}

