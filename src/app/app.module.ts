import { ShoppingListService } from './../services/shopping-list';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { EditRecipePage } from './../pages/edit-recipe/edit-recipe';
import { RecipePage } from './../pages/recipe/recipe';
import { RecipesPage } from './../pages/recipes/recipes';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    ShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    ShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShoppingListService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
