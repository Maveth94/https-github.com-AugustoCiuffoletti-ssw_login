import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChuckService } from "./chuck.service";
import { HttpClientModule } from "@angular/common/http";
import { NotificaComponent } from "./notifica/notifica.component";
import { NewPostComponent } from "./new-post/new-post.component";

@NgModule({
  declarations: [AppComponent, NotificaComponent, NewPostComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ChuckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
