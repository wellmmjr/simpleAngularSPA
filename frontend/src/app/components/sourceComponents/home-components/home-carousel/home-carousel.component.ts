import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {
  
  images = [62, 63, 83, 466, 965, 982, 1043, 738].map((n) => 
  `https://picsum.photos/id/${n}/1200/500`);

  myText = 'Accumsan habitant nunc imperdiet facilisis tellus facilisis convallis laoreet class eros ac phasellus suscipitante pulvinar taciti sit, egestas viverra etiam mauris fames venenatis duis nunc nisl taciti sed consequat eros  condimentum sem. eros laoreet odio euismod eros potenti ullamcorper ultrices dapibus venenatis metus curabitur  accumsan, velit potenti nostra aenean odio nibh sem sagittis lectus metus egestas. rutrum massa fames convallis  sapien pulvinar sollicitudin habitasse magna dictumst, tincidunt dictumst quis curabitur laoreet nisi mi commodo,  etiam ultricies dictum habitasse curabitur velit morbi lorem. etiam risus curabitur nisi sociosqu aliquam class  malesuada iaculis diam, tellus ut nibh feugiat pellentesque maecenas vulputate velit consectetur, nisl class odio  sollicitudin porttitor posuere semper potenti.  Pellentesque nunc aptent sem himenaeos massa potenti diam etiam fusce, vehicula elit justo aliquam class placerat  dictumst aenean etiam, ante bibendum suspendisse ultrices mollis tellus mi varius. nisl justo orci lacus donec  tellus feugiat, molestie ornare litora lacus porta a quisque, odio quisque curabitur ut facilisis. aenean a tortor  et per ultricies interdum ultricies fames at, etiam leo vulputate volutpat lectus vehicula aptent ad, vestibulum  libero duis odio vel quis ut congue. dolor suscipit adipiscing etiam praesent purus nisl ultricies lacinia  interdum ante proin, blandit quisque fusce neque pulvinar torquent mi dictum eu pharetra quisque, turpis mattis  aptent felis ullamcorper odio vel potenti nullam taciti.  Cras eget cursus tellus eleifend quis, in sit sollicitudin lectus commodo habitasse, vestibulum eros tristique  ante. ultricies vestibulum vivamus ad tempor senectus litora sed a libero maecenas, sociosqu etiam cras tortor  neque netus aliquam mattis nibh lorem semper, diam iaculis donec phasellus blandit nunc nec taciti suspendisse.  class congue class nullam at fusce tortor pellentesque cubilia nibh vitae, sit lorem a bibendum vel adipiscing  curae eros metus integer, quisque mauris enim tellus tincidunt congue facilisis aenean iaculis. felis rutrum  mauris donec litora fringilla nec neque ultrices gravida curabitur, etiam lacinia lobortis congue habitasse massa  vitae potenti sagittis, cras feugiat nostra curabitur sed tempus pharetra egestas nulla.  Metus ligula odio ac etiam id nam euismod pretium, leo platea laoreet venenatis tempor convallis donec phasellus  cras, primis euismod sem rutrum bibendum sagittis dapibus. pellentesque porttitor integer a consectetur cursus  orci augue elit, nam ullamcorper praesent aenean ornare aliquam proin sagittis etiam, semper ligula elit  consectetur proin ipsum mi. molestie vulputate velit rhoncus risus aliquet habitasse pharetra per, nostra purus  enim nibh tristique etiam vestibulum feugiat nullam, consectetur etiam tempor eleifend risus id donec. ullamcorper  cras non arcu et suscipit ac sem habitasse dictum, vivamus justo urna quisque lobortis eros lacus tellus, risus  potenti faucibus iaculis at elementum nibh vulputate.  Faucibus sed sagittis condimentum hendrerit urna molestie enim mollis senectus conubia duis, vulputate pretium  molestie himenaeos eu suspendisse malesuada quis vel neque eget, commodo accumsan eu consectetur tempus nec etiam  cras potenti cursus. cras turpis vestibulum curae sodales blandit iaculis facilisis congue lobortis vulputate,  enim consectetur dui fames fringilla risus massa sodales. consectetur luctus et arcu gravida uscipit id euismod  cras vehicula, urna porta mattis non nullam proin vel fusce, integer ultrices posuere porttitor varius imperdiet  at dolor. '
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @Input()
  sourceContent: any[]
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
