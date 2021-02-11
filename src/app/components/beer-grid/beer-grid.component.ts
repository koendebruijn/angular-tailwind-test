import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer/beer.service';

@Component({
  selector: 'app-beer-grid',
  templateUrl: './beer-grid.component.html',
  styleUrls: ['./beer-grid.component.scss'],
})
export class BeerGridComponent implements OnInit {
  constructor(private beerService: BeerService) {}
  beers = [] as Beer[];

  async ngOnInit(): Promise<void> {
    this.beers = await this.beerService.getBeers();
  }
}
