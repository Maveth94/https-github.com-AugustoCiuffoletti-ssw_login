import { AnimationKeyframesSequenceMetadata } from "@angular/animations";
import { Component } from "@angular/core";
import { ChuckService } from "./chuck.service";

export class Post {
  id: string;
  titolo: string;
  testo: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "I miei post-it";
  my_obj: Object = {};
  selezione: Post = new Post();
  constructor(private obj: ChuckService) {}

  ShowPost(id) {
    this.selezione.titolo = this.my_obj[id].titolo;
    this.selezione.testo = this.my_obj[id].testo;
  }

  Gettitle() {
    this.obj.getData().subscribe(
      (x: any) => {
        this.my_obj = x;
      },
      err => console.error("Observer got an error: " + err)
    );
  }

  ObjectX = this.Gettitle();

  addPost(newPost: Object) {
    var ultimaK : any;
    for (let x in this.my_obj ) {
      var chiavi = Object.keys(this.my_obj);
      var k = chiavi.length;
      ultimaK = parseInt(chiavi[k-1]);
    }
    let i: number = ultimaK + 1;
    var prova = { [i] : newPost };
    this.my_obj = Object.assign(this.my_obj, prova);
    this.obj.postData(this.my_obj).subscribe( (my_obj: object) =>
      {},
      err => console.error("Observer got an error: " + err)
    );
    console.log(this.my_obj);
  }

  DeletePost(id) {
    //console.log(this.my_obj[id]);
    delete this.my_obj[id];
    this.obj.postData(this.my_obj).subscribe( (my_obj: object) =>
      {},
      err => console.error("Observer got an error: " + err)
    );
    console.log(this.my_obj);
  }
}
