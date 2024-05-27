import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumsRoutingModule } from './forums-routing.module';
import { MaterialModule } from '../material/material.module';
import { ForumNewTopicComponent } from './forum-new-topic/forum-new-topic.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ForumMyTopicComponent } from './forum-my-topic/forum-my-topic.component';
import { ForumMyPostComponent } from './forum-my-post/forum-my-post.component';
import { ForumBookmarkComponent } from './forum-bookmark/forum-bookmark.component';


@NgModule({
  declarations: [
ForumNewTopicComponent,
ForumMyTopicComponent,
ForumMyPostComponent,
ForumBookmarkComponent

  ],
  imports: [
    CommonModule,
    ForumsRoutingModule,
    MaterialModule,
    CKEditorModule
  ]
})
export class ForumsModule { }
