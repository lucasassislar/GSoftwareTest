import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreedService } from '../../_services/breed.service';

@Component({
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class ListComponent {
    breeds: Array<any>;
    filteredBreeds: Array<any>;
    breedFilter: string;

    currentBreed: any;
    imageUrl: string;

    constructor(
        private breedService: BreedService
    ) { }


    firstCharUpper(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    buildFilter() {
        var breedFilter = this.breedFilter;
        if (breedFilter == undefined || breedFilter == null || !breedFilter) {
            this.filteredBreeds = this.breeds;
        } else {
            breedFilter = breedFilter.toLowerCase();
            this.filteredBreeds = new Array<string>();
            for (var i = 0; i < this.breeds.length; i++) {
                var breed = this.breeds[i];
                if (breed.toLowerCase().indexOf(breedFilter) != -1) {
                    this.filteredBreeds.push(breed);
                }
            }
        }
    }

    showBreed(breed) {
        this.currentBreed = this.breeds[breed];
        this.updateBreedImg();
    }

    async updateBreedImg() {
        var imgObj = await this.breedService.getRandomBreedImagePath(this.currentBreed.baseName, this.currentBreed.subName);
        this.imageUrl = imgObj.message;
    }

    async ngOnInit() {
        this.breeds = new Array();
        var breedList = await this.breedService.getAllBreeds();

        var msg = breedList.message;
        var counter = 0;
        for (var breedKey in msg) {
            var breed = msg[breedKey];
            if (breed.length > 0) {
                for (var i = 0; i < breed.length; i++) {
                    var breedSubName = breed[i];
                    var str = `${this.firstCharUpper(breedKey)} ${this.firstCharUpper(breedSubName)}`;
                    this.breeds.push({ str: str, id: counter, baseName: breedKey, subName: breedSubName });
                    counter++;
                }
            } else {
                var str = this.firstCharUpper(breedKey);
                this.breeds.push({ str: str, id: counter, baseName: breedKey });
                counter++;
            }
        }

        this.filteredBreeds = this.breeds;
    }
}
