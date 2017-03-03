import {Component, Output, EventEmitter, Input} from "@angular/core";
@Component({
  selector: "oa-froala",
  templateUrl: "../templates/froala.component.html"
})
export class FroalaComponent {
  @Output() froala = new EventEmitter();
  @Input() froalaText: string;
  option: Object;
  constructor() {
    // 在事件中要使用外部的this,因为函数内部也有this所以讲this的值赋给that
    var that = this;
    // 参数配置
    // https://www.froala.com/wysiwyg-editor/docs/options?utm_expid=98676916-2.gb-QgBReTCCS2F60oBIe_g.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F#language
    this.option = {
      heightMin: 150,
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      // charCounterMax: 200, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: [
        'fullscreen', 'insertImage',
        'bold', 'italic', 'underline', 'strikeThrough',
        'fontFamily', 'fontSize',
        'align', 'formatOL', 'formatUL'
      ],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.blur': function (e, editor) {
          that.froala.emit(that.froalaText);
          console.log(editor.selection.get());
        }
      }
    }
  }
}
