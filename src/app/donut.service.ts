import { afterNextRender, Injectable } from '@angular/core';
import { Donut, DummyDonuts } from './donut.model';

const DONUTS_KEY = "donuts";
@Injectable({
  providedIn: 'root'
})
export class DonutService {
  donuts = DummyDonuts;

  constructor() {
    afterNextRender(() => {
      const storedData = localStorage.getItem('donuts');
      if (storedData) {
        try {
          this.donuts = JSON.parse(storedData);
        }
        catch (err) {
          alert(err);
        }
      }
    });
  }

  addDonut(name: string, imageUrl: string) {
    if (!name || !imageUrl)
      return;

    const donut: Donut = {
      id: new Date().toUTCString(),
      name: name,
      imageUrl: imageUrl
    }
    this.donuts.unshift(donut);
    this.saveDonuts();
  }

  private saveDonuts() {
    localStorage.setItem("donuts", JSON.stringify(this.donuts));
  }
}
