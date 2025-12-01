import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  offset = signal(0);               // estado para paginación
  pokemons = signal<any>(null);     // estado para los datos cargados
  loading = signal(false);          // estado para mostrar cargando
  error = signal(false);            // estado de error

  constructor(
    private pokeService: PokemonService,
    private router: Router
  ) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading.set(true);
    this.error.set(false);

    this.pokeService.getPokemons(this.offset()).subscribe({
      next: (resp: any) => {

        this.pokemons.set(resp);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      }
    });
  }

  nextPage() {
    this.offset.set(this.offset() + 20);
    this.loadPokemons();
  }

  prevPage() {
    if (this.offset() === 0) return;
    this.offset.set(this.offset() - 20);
    this.loadPokemons();
  }

  goToDetail(url: string) {
    window.open(url, '_blank');
  }
}
