import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { Movie } from "./models/movie";
import { db } from "./../assets/movie-db";
import { FormsModule } from "@angular/forms";

describe("AppComponent", () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent, HeaderComponent, FooterComponent, CardComponent],
        imports: [FormsModule]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;

      fixture.detectChanges();
    });

  describe("boundary", () => {

    it("should create the app", () => {
      expect(app).toBeTruthy();
    });
  });

  describe("functional", () => {
    it('should show movie', () => {

      const appCardComponent = fixture.debugElement.query(By.css('app-card'));

      let appCardComponentElement = appCardComponent.nativeElement.querySelector("div.card");
      let firstMovie: Movie = db.movies[0];

      expect(appCardComponentElement.querySelectorAll('img')[0].src).toBe(firstMovie.image);

      expect(appCardComponentElement.innerHTML).toContain(firstMovie.title);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.genre);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.releasedDate);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.ratings);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.length);
      expect(appCardComponentElement.innerHTML).toContain(firstMovie.language);
    });


    it(" should contain image", async () => {
      let element = fixture.nativeElement;

      fixture.detectChanges();

      expect(element.querySelector('img').src).toBeDefined();
    });

    it('should render footer', () => {
      const appFooterComponent = fixture.debugElement.query(By.css('app-footer'));
      expect(appFooterComponent.nativeElement.querySelector("p").innerHTML).toContain("copyright Movie List");
    });


    it('should render checkbox for "action" genre checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.genre')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.genres[0].name);
    });

    it('should render checkbox for "fantasy" genre checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.genre')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.genres[1].name);
    });

    it('should render checkbox for "romance" genre checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.genre')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.genres[2].name);
    });

    it('should render checkbox for "horror" genre checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.genre')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.genres[3].name);
    });


    // --


    it('should render checkbox for "hindi" language checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.language')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.languages[0].name);
    });

    it('should render checkbox for "english" language checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.language')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.languages[1].name);
    });

    it('should render checkbox for "telugu" language checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.language')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.languages[2].name);
    });

    it('should render checkbox for "punjabi" language checkbox', () => {
      fixture.detectChanges();
      let genreCheckboxes = fixture.debugElement.query(By.css('.language')).nativeElement;
      expect(genreCheckboxes.innerHTML).toContain(db.languages[3].name);
    });


  });



});