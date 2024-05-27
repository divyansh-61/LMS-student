import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumNewTopicComponent } from './forum-new-topic/forum-new-topic.component';
import { ForumMyTopicComponent } from './forum-my-topic/forum-my-topic.component';
import { ForumMyPostComponent } from './forum-my-post/forum-my-post.component';
import { ForumBookmarkComponent } from './forum-bookmark/forum-bookmark.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new-topic', pathMatch : 'full'
 },

  {
    path: 'new-topic', component: ForumNewTopicComponent
  },
  {
    path: 'my-topics', component: ForumMyTopicComponent
  },
  {
    path: 'my-post', component: ForumMyPostComponent
  },
  {
    path: 'bookmarks', component: ForumBookmarkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumsRoutingModule { }
