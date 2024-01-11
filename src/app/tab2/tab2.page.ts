import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public nama: any="";
  public jenis_kelamin: any="";
  public nohp: any="";
  public email: any="";
  public asalsklh: any="";
  public programstudi: any="";
  public jenjang: any="";
  public kelas: any="";
  public info_kmps: any="";
  constructor(public toastCtrl: ToastController) {}
async addData(){
  const fd = new FormData();
  fd.append('nama',this.nama);
  fd.append('jenis_kelamin',this.jenis_kelamin);
  fd.append('no_hp',this.nama);
  fd.append('email',this.nama);
  fd.append('asal_sklh',this.asalsklh);
  fd.append('programstudi',this.programstudi);
  fd.append('jenjang',this.jenjang);
  fd.append('infokampus',this.info_kmps);
  
  const res = await axios.post('', fd);
  console.log(res.data);
  

  if(res.data.error === false){
      const toast = await this.toastCtrl.create({
        message:'Data berhasil ditambahkan',
        duration:2500
      });
      toast.present();
    }else{
      const toast = await this.toastCtrl.create({
        message:'Data gagal ditambahkan',
        duration:2500
      });
      toast.present();
    }
  }
}
