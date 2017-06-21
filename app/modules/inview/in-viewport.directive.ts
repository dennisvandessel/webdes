import { AnimationEntryParseResult } from '@angular/compiler/src/animation/animation_parser';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer } from '@angular/core';
import { InViewportService } from "./in-viewport.service";


export interface IOnInViewportChangeEvent {
  target: any;
  invp: boolean;
  numberOfTimesIn: number;
  numberOfTimesOut: number;
}


export interface InViewportConfig {
  partial?: boolean;
  direction?: 'both' | 'vertical' | 'horizontal';
  once?: boolean;
}

const DEFAULT_CONFIG: InViewportConfig = {
  partial: true,
  direction: 'both',
  once: true
};


const ANIMATION_PREFIX: string = "animation-";
const DELAY: number = 300;

@Directive({
  selector: '[invp]'
})
export class InViewportDirective implements AfterViewInit, OnDestroy {
  private subscription: any;
  private config: InViewportConfig;
  private invp: boolean;
  private timesIn: number = 0;
  private timesOut: number = 0;
  private animation: string = "";
  private delay: number = 0;

  @Output('inViewport') public action$: EventEmitter<any>;

  constructor(private renderer: Renderer,
            private elementRef: ElementRef,
              private inViewportService: InViewportService) {

    this.config = Object.assign({}, DEFAULT_CONFIG);
    

    
    this.action$ = new EventEmitter();
    this.invp = false;
    
  }

  @Input('invp-config')
  set updateConfig(value: InViewportConfig) {
    this.config = Object.assign(this.config, value);

  }

  @Input('invp-animation')              //animation when element comes in viewport in viewport
  set updateAnimation(value: string) {
    this.animation = value;
    if (this.animation)
        this.renderer.setElementClass(this.elementRef.nativeElement, 'animation-init', true)    
  }

  @Input('invp-delay')              
  set updateDelay(value: number) {
    this.delay = value;
    
  }


  ngAfterViewInit() {
    this.check(true);

    this.inViewportService.addTarget(this.elementRef.nativeElement);
    this.subscription = this.inViewportService.trigger$
      .subscribe((entries: Array<any>) => this.check());
  }

  ngOnDestroy() {
    this.inViewportService.removeTarget(this.elementRef.nativeElement);
    this.subscription.unsubscribe();
  }

  check(force?: boolean) {
    const el = this.elementRef.nativeElement;

    const elSize = (el.offsetWidth * el.offsetHeight);

    const rec = el.getBoundingClientRect();

    const vp = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    const tViz = rec.top >= 0 && rec.top < vp.height;
    const bViz = rec.bottom > 0 && rec.bottom <= vp.height;

    const lViz = rec.left >= 0 && rec.left < vp.width;
    const rViz = rec.right > 0 && rec.right <= vp.width;

    const vVisible = this.config.partial ? tViz || bViz : tViz && bViz;
    const hVisible = this.config.partial ? lViz || rViz : lViz && rViz;

    let invp = false;

    switch (this.config.direction) {
      case 'vertical':
        invp = !!(elSize && vVisible);
        break;
      case 'horizontal':
        invp = !!(elSize && hVisible);
        break;
      default:
        invp = !!(elSize && vVisible && hVisible);
    }

    if (force || this.invp !== invp) {
      this.invp = invp;
      this.onChange();
    }
  }

  onChange() {

    if (this.invp){
        this.actionInvp();
     
    }
    else
    {
        this.actionOutvp();
    }
    this.emitEvent();
  }

  actionInvp = () => {

       this.timesIn++;


        if (this.config.once && this.timesIn > 1)
          return 0;

        if (this.animation !== undefined && this.animation !== "")
        {
          let wait: number = DELAY * this.delay;
          setTimeout(() => {
              this.renderer.setElementClass(this.elementRef.nativeElement, ANIMATION_PREFIX + this.animation, true);  
          }, wait); 

        }
          
        
  }

  actionOutvp = () => {
    this.timesOut++;

      if (this.config.once && this.timesOut > 1)
          return 0;

      if (!this.config.once && this.animation !== undefined && this.animation !== "")
      {
  
          let wait: number = DELAY * this.delay;
          setTimeout(() => {
              this.renderer.setElementClass(this.elementRef.nativeElement, ANIMATION_PREFIX + this.animation , false)
          }, wait); 

      }

      
      
  }

  emitEvent = () => {
    let eventInfo: IOnInViewportChangeEvent = {
      target: this.elementRef.nativeElement,
      invp: this.invp,
      numberOfTimesIn: this.timesIn,
      numberOfTimesOut: this.timesOut
    }

    this.action$.emit(eventInfo);
  }

}
