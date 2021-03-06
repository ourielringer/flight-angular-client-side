import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Flight } from 'src/app/models/models';
import { HttpClient } from '@angular/common/http';
import { ListFligthService } from 'src/app/services/list-fligth.service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public svc: ListFligthService, public httpService: HttpService) { }

  ngOnInit(): void { }



  listBakc: boolean = false
  listgo: boolean = false

  // listflightgo: Flight[] = []
  // listflightback: Flight[] = []

  // @ViewChild("itemplus") itemplus: ElementRef
  // @ViewChild("itemminus") itemminus: ElementRef
  @ViewChild("itemplus") itemplus: ElementRef

  @ViewChild('notfound') notfound: ElementRef
  @ViewChild("notfoundback") notfoundback: ElementRef

  @ViewChild("bt1") bt1: ElementRef
  @ViewChild("bt2") bt2: ElementRef

  flight = new FormGroup({
    from: new FormControl(""),
    to: new FormControl(''),
    date: new FormControl(''),
    dateback: new FormControl(''),

  })

  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];

  listflightgo: Flight[] = []
  listflightback: Flight[] = []

  search() {
    this.svc.sumPassaengerarray()

    this.notfound.nativeElement.innerHTML = ""
    this.listflightgo = [];

    this.searchGo().subscribe(res => {
      console.log(res);
      if (res.length == 0) {
        console.log(res.length);
        console.log(this.notfound);

        this.notfound.nativeElement.innerHTML = "לא נמצא טיסות הלוך"
        return
      }
      this.listgo = true
      this.listflightgo.push(...res)
    });

    if (this.svc.goAndBack) {
      this.notfoundback.nativeElement.innerHTML = ''
      this.listflightback = [];
      this.searchBakc().subscribe(res => {
        console.log(res);
        if (res.length == 0) {
          console.log(res.length);

          this.notfoundback.nativeElement.innerHTML = "לא נמצא טיסות חזור"
          return
        }
        this.listBakc = true
        this.listflightback.push(...res)
      });
    }
  }

  searchGo() {
    return this.httpService.getFlight('http://localhost:3000/ticket', `?from=${this.flight.value.from}&&to=${this.flight.value.to}&&date=${this.flight.value.date}`)
  }

  searchBakc() {
    return this.httpService.getFlight('http://localhost:3000/ticket', `?from=${this.flight.value.to}&&to=${this.flight.value.from}&&date=${this.flight.value.dateback}`)
  }

  adultplus() {
    this.svc.adults++;
    this.sumOfPassengers()
  }

  adultminus() {
    this.svc.adults--;
    if (this.svc.adults < 0)
      this.svc.adults = 0
  }

  babyplus() {
    this.svc.babys++
    this.sumOfPassengers()
  }

  babyminus() {
    this.svc.babys--
    if (this.svc.babys < 0)
      this.svc.babys = 0
  }

  sumOfPassengers() {
    console.log(this.itemplus);
    if (this.svc.adults + this.svc.babys >= 9) {
      this.itemplus.nativeElement.disabled = true
      // this.itemminus.nativeElement.disabled = true
    }
  }

  ounside() {
    this.svc.goAndBack = false
  }

  goandback() {
    this.svc.goAndBack = true
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

