import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  activeTab: string = 'home'; // Set the default active tab

  tabs = [
    { id: 'home', label: 'Pendaftaran'},
    { id: 'profile', label: 'Fee Akun'},
    { id: 'contact', label: 'Data calon'}
  ];

  activateTab(tabId: string): void {
    this.activeTab = tabId;
  }
  //Nav Pertama
  public nama: any="";
  public jenis_kelamin: any="";
  public nohp: any="";
  public email: any="";
  public asalsklh: any="";
  public programstudi: any="";
  public jenjang: any="";
  public kelas: any="";
  public info_kmps: any="";
  //Nav Kedua
  public AllData:any =[]; 
  constructor(public toastCtrl: ToastController) {
    this.getdata();
  }
async addData(){
  const fd = new FormData();
  fd.append('nama',this.nama);
  fd.append('jenis_kelamin',this.jenis_kelamin);
  fd.append('no_hp',this.nohp);
  fd.append('email',this.email);
  fd.append('asal_sklh',this.asalsklh);
  fd.append('programstudi',this.programstudi);
  fd.append('jenjang',this.jenjang);
  fd.append('kelas',this.kelas);
  fd.append('infokampus',this.info_kmps);
  
  const res = await axios.post('https://praktikum-cpanel-unbin.com/Naufal/getdatapkmb.php', fd);
  console.log(res.data);

  if(res.data.error === false){
      const toast = await this.toastCtrl.create({
        message:'Data gagal ditambahkan',
        duration:2500
      });
      toast.present();
    }else{
      const toast = await this.toastCtrl.create({
        message:'Data berhasil ditambahkan',
        duration:2500
      });
      toast.present();
    }
  }
  async getdata(){
    const res1 = await axios.get('https://praktikum-cpanel-unbin.com/Naufal/getDataCalon.php');
  console.log(res1.data);
  this.AllData = res1.data.result;
  }
  getStatusColor(status: string): any {
    return status === 'Menunggu Pembayaran' ? { color: 'red' } : { color: 'green' };
  }
}
