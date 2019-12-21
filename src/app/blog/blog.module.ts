import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@scullyio/ng-lib';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [ArticleComponent, BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ComponentsModule],
})
export class BlogModule {
}
