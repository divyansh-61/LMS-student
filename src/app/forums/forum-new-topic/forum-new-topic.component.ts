import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-forum-new-topic',
  templateUrl: './forum-new-topic.component.html',
  styleUrls: ['./forum-new-topic.component.css']
})
export class ForumNewTopicComponent {
  title = 'angular';
  public Editor = ClassicEditor;
}
