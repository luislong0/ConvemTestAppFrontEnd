import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinTeamComponent } from './join-team.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('JoinTeamComponent', () => {
  let component: JoinTeamComponent;
  let fixture: ComponentFixture<JoinTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinTeamComponent],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
