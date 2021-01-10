import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <h3>fxHide / fxShow</h3>
  <h4>Agrandissez ou réduisez la fenêtre </h4>
  <div 
      fxLayout.xs="row"
      fxLayout="column"
      class="container">
    <div class="red-block"
         fxFlexOffset="5"
         fxHide
         fxShow.gt-xs>
    </div>
    <div class="orange-block"
         fxFlexOffset="5"
         fxShow
         fxHide.gt-xs>
    </div>
</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: grey;
      height: 400px;
      width: 100%;
    }
    
    .red-block {
      background-color: red;
      height: 50px;
      width: 50px;
    }
    
    .orange-block {
      background-color: orange;
      height: 50px;
      width: 50px;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}