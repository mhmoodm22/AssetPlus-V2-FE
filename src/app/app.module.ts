import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/pages/login/login.component';
import { SignupComponent } from './authentication/pages/signup/signup.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { AuthLayoutComponent } from './authentication/components/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './pages/loader/loader.component';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { PreLoginGuard } from './guard/pre-login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BannerComponent } from './pages/banner/banner.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ToastrComponent } from './pages/toastr/toastr.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RateplanComponent } from './pages/rateplan/rateplan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    SidebarComponent,
    AuthLayoutComponent,
    DashboardComponent,
    LoaderComponent,
    HomeComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ToastrComponent,
    HomeLayoutComponent,
    FeaturesComponent,
    HeadingComponent,
    ContactUsComponent,
    CalendarComponent,
    RateplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FullCalendarModule
    
  ],
  providers: [
    PreLoginGuard,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi:true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
