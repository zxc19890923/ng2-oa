import {Directive, ElementRef, Renderer, HostListener, OnChanges} from "@angular/core";
@Directive({
  selector: "[documentSize]"
})
export class SizeDirective implements OnChanges{
  constructor(public el:ElementRef, public re:Renderer) {
    this.windowSize();
  }
  ngOnChanges() {
    // 窗口大小发生变化的时候
    this.windowSize();
  }

  // 定义方法, 在构造函数中调用
  public windowSize() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    console.log(height + "---------" + width);

    this.re.setElementStyle(this.el.nativeElement, "width", width + "px");
    this.re.setElementStyle(this.el.nativeElement, "height", height + "px");
  }
}
