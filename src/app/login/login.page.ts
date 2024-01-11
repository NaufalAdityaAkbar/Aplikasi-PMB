import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public Alldata: any = [];
  

  constructor(
    private router: Router,
    public alertController: AlertController
    ) {}

    async alert(){
      const alert = await this.alertController.create({
        header: 'Selamat Datang',
        subHeader: 'Universitas Binaniaga',
        message: '',
        buttons: ['Ok'],
      });
  
      await alert.present();
    }

    async alert2(){
      const alert = await this.alertController.create({
        header: 'Information',
        subHeader: 'Kesalahan saat login',
        message: 'Silahkan cek kembali Username dan Password!',
        buttons: ['Ok'],
      });
  
      await alert.present();
    }
  async login() {
    const fd = new FormData();
    fd.append('username',this.username);
    fd.append('password',this.password);

       axios.post('https://praktikum-cpanel-unbin.com/Naufal/getUserPass.php', fd)
      .then(response =>{
        const data = response.data;
        if (data.success) {
          this.router.navigate(['tabs']);
          this.alert();
        } else {
          this.alert2();
          console.error('Login failed:', data.message || 'Unknown error');
        }
      })
      .catch(error => {
        console.error('An error occurred during login', error);
      });
    }
  ngOnInit() {}
}
