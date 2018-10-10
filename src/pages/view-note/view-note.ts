import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.models'

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {

  note: Note;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private noteService: NoteServiceProvider) {
      this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number){
     this.noteService.deleteNote(createDate);
     this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNotePage');
  }

}
